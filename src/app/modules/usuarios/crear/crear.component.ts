import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConfirmationService, Message, MessageService } from 'primeng/api';
import { UserServiceService } from '../../../shared/Services/Usuarios/user-service.service';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.scss']
})
export class CrearComponent implements OnInit {

  @Output() backTable: EventEmitter<any> = new EventEmitter();
  @Input() isEdit: boolean;
  @Input() id: any;

  form: FormGroup;
  functions;
  certificates;
  branchOfficeId;
  msgs1: Message[];

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
  files: any[] = [];
  imgMsgError: string | null = null;
  @ViewChild("fileDropRef", { static: false }) fileDropEl: ElementRef;

  constructor(private formbuilder: FormBuilder, private UserServiceService: UserServiceService) {
    this.form = this.formbuilder.group({
      nom_usuario: [null, [Validators.required]],
      run_usuario: [null, [Validators.required]],
      compania: [null, [Validators.required]],
      fono_usuario: [0, [Validators.required]],
      tipo_contrato: [null, [Validators.required]],
      funcion: [null, [Validators.required]],
      nacionalidad: [null, [Validators.required]],
      cuenta: [null, [Validators.required]]
    });
  }

  ngOnInit(): void {

    this.loadOpcions();
  }
  loadOpcions() {
    if (this.isEdit) {
      this.loadAlert();
    }
  }
  loadAlert() {
    this.form.setValue({
      titulo: this.id.titulo,
      mensaje: this.id.mensaje,
      funcionId: this.id.funcionId,
      certificadoId: this.id.certificadoId,
      diasAnticipacion: this.id.diasAnticipacion
    });
  }
  backToTable() {
    this.backTable.emit();
  }

  sendFormulario() {
    console.log('En el send');
    let data = this.form.getRawValue();
    console.log(data);
    this.sendData(data);
  }
  async sendData(data) {
    console.log('en sen data');
    if (this.isEdit) {
      //(await this.UserServiceService.UserUpdate(this.idNoticia.id, data))
      //  .subscribe({
      //    next: () => {
      //      this.backTable.emit();
      //}
      //});
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
    return (this.form.controls[campo].errors)
      && (this.form.controls[campo].touched || this.form.controls[campo].dirty)
      && this.form.invalid;
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
