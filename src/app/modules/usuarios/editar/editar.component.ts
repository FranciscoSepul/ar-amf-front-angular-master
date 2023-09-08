import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Message } from 'primeng/api';
import { UserServiceService } from '../../../shared/Services/Usuarios/user-service.service';
import { Dropdown } from 'primeng/dropdown';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.scss']
})
export class EditarComponent implements OnInit {
  @Output() backTable: EventEmitter<any> = new EventEmitter();
  @ViewChild('dropContract') dropContract: Dropdown;
  @ViewChild('dropFunction') dropFunction: Dropdown;
  @ViewChild('dropCompany') dropCompany: Dropdown;
  @ViewChild('dropNacionalidad') dropNacionalidad: Dropdown;

  @Input() isEdit: boolean;
  @Input() id: any;

  form: FormGroup;
  certificates;
  branchOfficeId;
  msgs1: Message[];
  compania;
  function;
  contrato;
  nacionalidad;
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

  constructor(private formbuilder: FormBuilder,private UserServiceService: UserServiceService) {
    this.form = this.formbuilder.group({
      nom_usuario: [null, [Validators.required]],
      run_usuario: [null, [Validators.required]],
      idempresa: [null, [Validators.required]],
      fono_usuario: [0, [Validators.required]],
      tipo_contrato: [null, [Validators.required]],
      idtipocuenta: [null, [Validators.required]],
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
  async loadCompany(){
    (await this.UserServiceService.CompanyList()).subscribe({
      next: data => {
        this.compania = data
      }
    })
  }
  async loadFunctions(){
    (await this.UserServiceService.FunctionList()).subscribe({
      next: data => {
        this.function = data
      }
    })
  }
  async loadContract(){
    (await this.UserServiceService.ContractList()).subscribe({
      next: data => {
        this.contrato = data
        console.log(this.contrato[1].contract)
      }
    })
  }
  async loadNacionalidad(){
    (await this.UserServiceService.NationalityList()).subscribe({
      next: data => {
        this.nacionalidad = data
        console.log(this.contrato[1].contract)
      }
    })
  }
  backToTable() {
    this.backTable.emit();
  }
}
