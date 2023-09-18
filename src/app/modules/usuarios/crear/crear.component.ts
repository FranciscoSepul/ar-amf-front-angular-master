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
  fileName: string;
  extension: string;
  thumbnail: any;
  thumbnail_: any;
  fileType: any;
  imgMsgErrorFinal: any;
  idCuenta = 0;
  idCompania = 0
  files: any[] = [];
  companys: any[]=[];
  imgMsgError: string | null = null;

  @ViewChild("fileDropRef", { static: false }) fileDropEl: ElementRef;

  constructor(private formbuilder: FormBuilder, private UserServiceService: UserServiceService) {
    this.form = this.formbuilder.group({
      nom_usuario: [null, [Validators.required]],
      run_usuario: [0, [Validators.required]],
      fono_usuario: [0, [Validators.required]],
      tipo_contrato: [null, [Validators.required]],
      compania:[null,],
      funcion: [null, [Validators.required]],
      nacionalidad: [null, [Validators.required]],
      correo: [null, [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.loadCompanys();
    this.loadOpcions();
  }

  loadOpcions() {
    this.loadCompany();
    this.loadFunctions();
    this.loadContract();
    this.loadNacionalidad();
    if (this.isEdit) {
      this.CargarEditar();
    }
  }

  CargarEditar(){
    this.loadCompanys();
    this.TipoCuenta();
  }

  loadAlert() {
    this.form.setValue({
      nom_usuario: this.idUser.nom_usuario,
      run_usuario: this.idUser.run_usuario,
      compania :this.idCompania,
      fono_usuario: this.idUser.fono_usuario,
      tipo_contrato: this.idUser.tipo_contrato,
      funcion: this.idCuenta,
      nacionalidad: this.idUser.nacionalidad,
      correo: this.idUser.correo,
    });
  }
  Compania() {
    let compa = this.companys.find(x => x.nom_empresa == this.idUser.empresa)
    if(compa){
      this.idCompania = compa.id_empresa;
      this.loadAlert();
    }
  }

  TipoCuenta() {
    if (this.idUser.tipocuenta == 'Administrador') {
      this.idCuenta = 1;
    } if (this.idUser.tipocuenta == 'Profesional') {
      this.idCuenta = 2;
    } if (this.idUser.tipocuenta == 'Empresa') {
      this.idCuenta = 3;
    }
  }
  async loadCompany() {
    (await this.UserServiceService.CompanyList()).subscribe({
      next: data => {
        this.compania = data,
        this.companys = data
      }
    })
  }
  async loadCompanys() {
    (await this.UserServiceService.CompanyList()).subscribe({
      next: data => {
        this.companys = data;
        this.Compania();
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
      (await this.UserServiceService.UserUpdate(data)).subscribe({
        next: () => {
          this.backTable.emit();
        }
      });
    } else {
      (await this.UserServiceService.UserCreate(data))
        .subscribe({
          next: () => {
            this.backTable.emit();
          }
        })
    }
  }
}
