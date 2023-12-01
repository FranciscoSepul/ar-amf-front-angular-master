import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConfirmationService, Message, MessageService } from 'primeng/api';
import { DirectionService } from '../../../shared/Services/direccion/direction.service';
import { CompanyService } from '../../../shared/Services/Company/company.service';
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
  trabajadores;
  notificacion;
  date:Date;

  constructor(private formbuilder: FormBuilder, private UserServiceService: UserServiceService, private DirectionService: DirectionService, private CompanyService: CompanyService) {
    this.form = this.formbuilder.group({
      cuerpo: [null, [Validators.required]],
      fechaprogramacion: [null, [Validators.required]],
      idcompany: [null, [Validators.required]],
      idnotificaciondirigida: [2, [Validators.required]],
      idtiponotificacion: [1, [Validators.required]],
      idtrabajador: [null, [Validators.required]],
      titulo: [null, [Validators.required]]
    });
  }

  ngOnInit(): void {
    this.loadOpcions();
  }

  loadOpcions() {
    this.loadCompany();
    this.loadTipoNotificacion();
  }

  async loadCompany() {
    (await this.CompanyService.CompanyListNotDisable()).subscribe({
      next: data => {
        this.compania = data
      }
    })
  }
  async loadTipoNotificacion() {
    (await this.CompanyService.ListTipoNotificacion()).subscribe({
      next: data => {
        this.notificacion = data
      }
    })
  }

  backToTable() {
    this.backTable.emit();
  }

  async usersByCompany(id) {
    (await this.UserServiceService.GetTrabajadoresByCompany(id.value)).subscribe({
      next: data => {
        this.trabajadores = data;
      }
    })
  }

  sendFormulario() {
    let data = this.form.getRawValue();
    this.sendData(data);
  }

  async sendData(data) {
    (await this.CompanyService.NotificationCreate(data))
      .subscribe({
        next: () => {
          this.backTable.emit();
        }
      })
  }
}


