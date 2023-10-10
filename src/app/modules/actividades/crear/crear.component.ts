import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConfirmationService, Message, MessageService } from 'primeng/api';
import { ActivityService } from '../../../shared/Services/Activity/activity.service';
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

  form: FormGroup;
  certificates;
  companys;
  temas;
  usuarios;

  constructor(private formbuilder: FormBuilder, private ActivityService: ActivityService,private CompanyService : CompanyService,private UserServiceService:UserServiceService ) {
    this.form = this.formbuilder.group({
      descripcion: [null, [Validators.required]],
      fechaprogramacion: [null, [Validators.required]],
      horaprogramacion: [null, [Validators.required]],
      idcompany: [null, [Validators.required]],
      idprofesionalacargo: [null, [Validators.required]],
      tema: [null, [Validators.required]]
    });
  }

  ngOnInit(): void {
    this.loadOpcions();
  }

  loadOpcions() {
    this.tema();
    this.loadCompanys();
  }

  async tema() {
    (await this.ActivityService.ListTema()).subscribe({
      next: data => {
        this.temas = data
      }
    })
  }

  async loadCompanys() {
    (await this.CompanyService.CompanyListNotDisable()).subscribe({
      next: data => {
        this.companys = data;
      }
    })
  }
  async getAllUsersByCompany(event) {
    (await this.UserServiceService.ProfesionalList(event.value)).subscribe({
      next: data => {
        this.usuarios = data;
      },
      error(e) {
        this.helpers.checkPermission(this.messageService, e);
      }
    })
  }

  backToTable() {
    this.backTable.emit();
  }

  sendFormulario() {
    console.log('enviado');
    let data = this.form.getRawValue();
    this.sendData(data);
  }

  async sendData(data) {
    if (this.isEdit) {
      console.log('data ' + data.nom_empresa);
      (await this.ActivityService.Update(data)).subscribe({
        next: () => {
        this.backTable.emit();
       }
      });
      } else {
       (await this.ActivityService.Create(data))
        .subscribe({
          next: () => {
           this.backTable.emit();
         }
      })
    }
  }
}
