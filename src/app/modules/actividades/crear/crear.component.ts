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
  trabajador;
  implementos;
  date: Date;

  constructor(private formbuilder: FormBuilder, private ActivityService: ActivityService, private CompanyService: CompanyService, private UserServiceService: UserServiceService) {
    this.form = this.formbuilder.group({
      descripcion: [null, [Validators.required]],
      fechaprogramacion: [null, [Validators.required]],
      horaprogramacion: [null, [Validators.required]],
      idcompany: [null, [Validators.required]],
      idprofesionalacargo: [null, [Validators.required]],
      tema: [null, [Validators.required]],
      idtrabajador: [null, [Validators.required]],
      idimplementos: [null, [Validators.required]]
    });
  }

  ngOnInit(): void {
    this.loadOpcions();
  }

  loadOpcions() {
    this.tema();
    this.loadCompanys();
    this.Implementos();
    console.log('edit '+this.isEdit);
    if (this.isEdit) {
      this.CargarEditar();
    }
  }

  CargarEditar() {
    this.loadActivity();
  }

  async loadActivity() {
    (await this.ActivityService.GetActivityById(this.idUser.id)).subscribe({
      next: data => {
        this.TrabajadoresByCompany(data.idcompany);
        this.form.setValue({
          descripcion: data.descripcion,
          fechaprogramacion: data.fechaprogramacion,
          horaprogramacion: data.horaprogramacion,
          idcompany: data.idcompany,
          idprofesionalacargo: data.idprofesionalacargo,
          tema: data.tema,
          idtrabajador: data.idtrabajador,
          idimplementos: data.idimplementos
        });

      },
      error(e) {
        this.helpers.checkPermission(this.messageService, e);
      }
    })
  }

  async Implementos() {
    (await this.ActivityService.Implementos()).subscribe({
      next: data => {
        this.implementos = data
      }
    })
  }

  async tema() {
    (await this.ActivityService.ListTema()).subscribe({
      next: data => {
        this.temas = data
      }
    })
  }
  async UserByCompany(id) {
    (await this.UserServiceService.GetJobByCompany(id)).subscribe({
      next: data => {
        this.trabajador = data;
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
  async TrabajadoresByCompany(id){
    (await this.UserServiceService.ProfesionalList(id)).subscribe({
      next: data => {
        this.usuarios = data;
        this.UserByCompany(id);
      },
      error(e) {
        this.helpers.checkPermission(this.messageService, e);
      }
    })
  }
  
  async getAllUsersByCompany(event) {
    console.log('en get all');
    (await this.UserServiceService.ProfesionalList(event.value)).subscribe({
      next: data => {
        this.usuarios = data;
        this.UserByCompany(event.value);
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
