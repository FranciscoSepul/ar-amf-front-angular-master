import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConfirmationService, Message, MessageService } from 'primeng/api';
import { DirectionService } from '../../../shared/Services/direccion/direction.service';
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
  companys: any[] = [];
  imgMsgError: string | null = null;

  @ViewChild("fileDropRef", { static: false }) fileDropEl: ElementRef;

  constructor(private formbuilder: FormBuilder, private DirectionService: DirectionService) {
    this.form = this.formbuilder.group({
      nom_empresa: [null, [Validators.required]],
      rut: [null, [Validators.required]],
      fechaCreacion: [null, [Validators.required]],
      fechaFinContrato: [null, [Validators.required]],
      correo: [null, [Validators.required]],
      direccion: [null, [Validators.required]],
      comuna: [null, [Validators.required]],
      region: [null, [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.loadOpcions();
  }

  loadOpcions() {
    this.Region();
    //this.Comuna();
    if (this.isEdit) {
      this.CargarEditar();
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

  async cambioRegion(event) {
    console.log('cambio ' + event.value);
    (await this.DirectionService.GetComunaByRegion(event.value)).subscribe({
      next: data => {
        this.comuna = data
      }
    })
  }

  loadCompany() {
    console.log('nom user ' + this.idUser.rut + '-' + this.idUser.dvRut);
    this.form.setValue({
      nom_empresa: this.idUser.nom_empresa,
      rut: this.idUser.rut + '-' + this.idUser.dvRut,
      fechaCreacion: this.idUser.fechaCreacion,
      fechaFinContrato: this.idUser.fechaFinContrato,
      correo: this.idUser.correo,
      direccion: this.idUser.direccion,
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
      console.log('data ' + data.id_empresa);
      //(await this.UserServiceService.UserUpdate(data)).subscribe({
      // next: () => {
      //  this.backTable.emit();
      // }
      //});
      //} else {
      // (await this.UserServiceService.UserCreate(data))
      //  .subscribe({
      //    next: () => {
      //     this.backTable.emit();
      //   }
      // })
    }
  }

}
