import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConfirmationService, Message, MessageService } from 'primeng/api';
import { DirectionService } from '../../../shared/Services/direccion/direction.service';
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
  branchOfficeId;
  msgs1: Message[];
  region;
  comuna;

  constructor(private formbuilder: FormBuilder, private DirectionService: DirectionService,private CompanyService : CompanyService ) {
    this.form = this.formbuilder.group({
      nom_empresa: [null, [Validators.required]],
      rut: [null, [Validators.required]],
      fechaCreacion: [null, [Validators.required]],
      fechaFinContrato: [null, [Validators.required]],
      correo: [null, [Validators.required]],
      direccion: [null, [Validators.required]],
      comuna: [null, [Validators.required]],
      region: [null, [Validators.required]],
      id_empresa:[null,[Validators.required]],
    });
  }

  ngOnInit(): void {
    this.loadOpcions();
  }

  loadOpcions() {
    this.Region();
    if (this.isEdit) {
      this.ComunaByRegion(this.idUser.region);

    }
  }

  CargarEditar() {
    this.loadCompany();
  }

  async Region() {
    (await this.DirectionService.RegionList()).subscribe({
      next: data => {
        this.region = data
      }
    })
  }

  async ComunaByRegion(id) {
    (await this.DirectionService.GetComunaByRegion(id)).subscribe({
      next: data => {
        this.comuna = data;
        this.CargarEditar();
      }
    })
  }

  async cambioRegion(event) {
    (await this.DirectionService.GetComunaByRegion(event.value)).subscribe({
      next: data => {
        this.comuna = data
      }
    })
  }
  loadCompany() {
    this.form.setValue({
      nom_empresa: this.idUser.nom_empresa,
      rut: this.idUser.rut + '-' + this.idUser.dvRut,
      fechaCreacion: this.idUser.fechaCreacion,
      fechaFinContrato: new Date(this.idUser.fechaFinContrato),
      correo: this.idUser.correo,
      direccion: this.idUser.direccion,
      comuna: this.idUser.comuna,
      region: this.idUser.region,
      id_empresa:this.idUser.id_empresa
    });
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
      console.log('data ' + data.nom_empresa);
      (await this.CompanyService.CompanyUpdate(data)).subscribe({
        next: () => {
        this.backTable.emit();
       }
      });
      } else {
       (await this.CompanyService.CompanyCreate(data))
        .subscribe({
          next: () => {
           this.backTable.emit();
         }
      })
    }
  }

}
