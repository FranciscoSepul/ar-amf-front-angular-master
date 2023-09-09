import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConfirmationService, Message, MessageService } from 'primeng/api';
import { UserServiceService } from '../../../shared/Services/Usuarios/user-service.service';
import { Dropdown } from 'primeng/dropdown';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.scss']
})
export class CrearComponent implements OnInit {

  @Output() backTable: EventEmitter<any> = new EventEmitter();
  @ViewChild('dropContract') dropContract: Dropdown;
  @ViewChild('dropFunction') dropFunction: Dropdown;
  @ViewChild('dropCompany') dropCompany: Dropdown;
  @ViewChild('dropNacionalidad') dropNacionalidad: Dropdown;

  @Input() isEdit: boolean;
  @Input() idUser: any;

  form: FormGroup;
  certificates;
  branchOfficeId;
  msgs1: Message[];
  compania;
  function;
  contrato;
  nacionalidades;
  nombre: string;
  description: string;
  selectedTipo: number;
  fecha: Date;
  hora: Date;
  myfile: any[] = [];
  fileName: string;
  extension: string;
  thumbnail: any;
  thumbnail_: any;
  fileType: any;
  imgMsgErrorFinal: any;
  idCuenta=0;
  files: any[] = [];
  imgMsgError: string | null = null;

  @ViewChild("fileDropRef", { static: false }) fileDropEl: ElementRef;

  constructor(private formbuilder: FormBuilder, private UserServiceService: UserServiceService) {
    this.form = this.formbuilder.group({
      nom_usuario: [null, [Validators.required]],
      run_usuario: [null, [Validators.required]],
      idempresa: [null, [Validators.required]],
      fono_usuario: [0, [Validators.required]],
      tipo_contrato: [null, [Validators.required]],
      funcion: [null, [Validators.required]],
      nacionalidad: [null, [Validators.required]],
      correo: [null, [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.loadOpcions();
  }

  loadOpcions() {

    this.loadCompany();
    this.loadFunctions();
    this.loadContract();
    this.loadNacionalidad();
    if (this.isEdit) {
      this.TipoCuenta();
      this.loadAlert();
    }
  }


  loadAlert() {
    console.log('lad ' + this.idUser.tipocuenta)
    this.form.setValue({
      nom_usuario: this.idUser.nom_usuario,
      run_usuario: this.idUser.run_usuario,
      idempresa: this.idUser.empresa,
      fono_usuario: this.idUser.fono_usuario,
      tipo_contrato: this.idUser.tipo_contrato,
      funcion:this.idCuenta,
      nacionalidad: this.idUser.nacionalidad,
      correo: this.idUser.correo,
    });
  }

  TipoCuenta(){
    console.log('tipo de cta '+this.idUser.tipocuenta);
    if(this.idUser.tipocuenta == 'Administrador'){
      this.idCuenta=1;
    }if(this.idUser.tipocuenta == 'Profesional'){
      this.idCuenta=2;
    }if(this.idUser.tipocuenta == 'Empresa'){
      this.idCuenta=3;
    }
  }
  async loadCompany() {
    (await this.UserServiceService.CompanyList()).subscribe({
      next: data => {
        this.compania = data
      }
    })
  }
  async loadFunctions() {
    (await this.UserServiceService.FunctionList()).subscribe({
      next: data => {
        this.function = data
      }
    })
  }
  async loadContract() {
    (await this.UserServiceService.ContractList()).subscribe({
      next: data => {
        this.contrato = data
      }
    })
  }
  async loadNacionalidad() {
    (await this.UserServiceService.NationalityList()).subscribe({
      next: data => {
        this.nacionalidades = data
      }
    })
  }

  backToTable() {
    this.backTable.emit();
  }

  sendFormulario() {
    let data = this.form.getRawValue();
    this.sendData(data);
  }

  async sendData(data) {
    if (this.isEdit) {
    } else {
      (await this.UserServiceService.UserCreate(data))
        .subscribe({
          next: () => {
            this.backTable.emit();
          }
        })
    }
  }

  onFileDropped($event) {
    if (!this.isEdit) {
      this.prepareFilesList($event);
    }
  }
  async prepareFilesList(files: Array<any>) {
    this.imgMsgError = null

    const toBase64 = newFile => new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(newFile);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });

    let file;

    for (const item of files) {
      item.progress = 0;
      this.files.push(item);
      file = await toBase64(item);
      this.fileName = item.name;
      this.extension = item.type;
    }
    this.thumbnail_ = file;
    this.fileDropEl.nativeElement.value = "";
  }
  campoInvalid(campo: string) {
    //return (this.form.controls[campo].errors)
    // && (this.form.controls[campo].touched || this.form.controls[campo].dirty)
    // && this.form.invalid;
  }
  fileBrowseHandler(files) {
    let counter: boolean = false
    let FullFileName;
    for (const item of files) {
      FullFileName = item.name;
      const fileName = item.name.toUpperCase().split(".");
      if (fileName[1] == 'PNG' || fileName[1] == 'SVG') {
        counter = true;
      } else {
        counter = false;
      }
    }

    if (counter && FullFileName.length < 50) {
      this.prepareFilesList(files)
    } else if (FullFileName.length > 50) {
      this.imgMsgError = 'El nombre del archivo es muy largo, intente con un nombre más pequeño que no sobrepase los 50 caracteres'
    } else {
      this.deleteFile();
      this.imgMsgError = 'Por favor elegir un formato de imagen valido "PNG, SVG."';

    }
  }
  deleteFile() {
    if (!this.isEdit) {
      this.thumbnail_ = null;
    }
  }
}
