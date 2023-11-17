import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConfirmationService, Message, MessageService } from 'primeng/api';
import { UserServiceService } from '../../../shared/Services/Usuarios/user-service.service';
import { CompanyService } from '../../../shared/Services/Company/company.service';
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
  TipoUsuario: any;
  form: FormGroup;
  empresa:any
  compania;
  function;
  contrato;
  nacionalidades;
  idCuenta = 0;
  idCompania = 0
  files: any[] = [];
  companys: any[] = [];
  imgMsgError: string | null = null;


  constructor(private formbuilder: FormBuilder, private UserServiceService: UserServiceService, private CompanyService: CompanyService) {
    this.form = this.formbuilder.group({
      nom_usuario: [null, [Validators.required]],
      run_usuario: [0, [Validators.required]],
      fono_usuario: [0, [Validators.required]],
      tipo_contrato: [null, [Validators.required]],
      id_empresa: [null, [Validators.required]],
      funcion: [null, [Validators.required]],
      nacionalidad: [null, [Validators.required]],
      correo: [null, [Validators.required]],
    });
  }

  ngOnInit(): void {
    console.log(this.isEdit);
    this.TipoUsuario = sessionStorage.getItem('IdTipoCuenta');
    this.loadOpcions();
  }

  loadOpcions() {
    console.log('en editar ' + this.TipoUsuario);
    this.loadFunctions();
    this.loadContract();
    this.loadNacionalidad();
    if (this.TipoUsuario == "1") {
      this.isEdit=true;
      this.loadAlert();
      this.CargarEditar();
    } else {
      this.isEdit = false;
      this.loadAlert()
      this.loadCompany();
    }
  }

  CargarEditar() {
    this.loadCompanys();
  }

  async loadAlert() {
    let user = sessionStorage.getItem('User');
    console.log(user);
    (await this.UserServiceService.GetUser(user)).subscribe(async (data) => {
      this.empresa = data?.idempresa;
      this.form.setValue({
        nom_usuario: data?.nom_usuario,
        run_usuario: data?.run_usuario,
        id_empresa: data?.idempresa,
        fono_usuario: data?.fono_usuario,
        tipo_contrato: data?.tipo_contrato,
        funcion: data?.idtipocuenta,
        nacionalidad: data?.nacionalidad,
        correo: data?.correo,
      });
      this.loadCompanyEdit();
    });
  }
  CompaniaLoad() {
    let compa = this.companys.find(x => x.id_empresa ==  this.empresa)
    if (compa) {
      let compaValidate = this.compania.find((x: { id_empresa: any; }) => x.id_empresa ==  this.empresa)
      if (!compaValidate) {
        this.compania.push(compa);
      }
      this.idCompania = compa.id_empresa;
    }
  }

  async loadCompany() {
    (await this.CompanyService.CompanyListNotDisable()).subscribe({
      next: data => {
        this.compania = data
      }
    })
  }
  async loadCompanyEdit() {
    (await this.CompanyService.CompanyListNotDisable()).subscribe({
      next: data => {
        this.compania = data;
        this.CompaniaLoad();
      }
    })
  }
  async loadCompanys() {
    (await this.CompanyService.CompanyList()).subscribe({
      next: data => {
        this.companys = data;
        this.loadCompanyEdit();
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

