import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccidentsService } from '../../../shared/Services/Accidents/accidents.service';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.scss']
})
export class CrearComponent implements OnInit {

  @Input() isEdit: boolean;
  @Input() idUser: any;
  form: FormGroup;

  constructor(private formbuilder: FormBuilder, private AccidentsService: AccidentsService) {
    this.form = this.formbuilder.group({
      tipoaccidente: [null, [Validators.required]],
      descripcion: [null, [Validators.required]],
      empresa: [null, [Validators.required]],
      nombreProfesional: [null, [Validators.required]],
      gravedad: [null, [Validators.required]],
      
      fechaaccidente: [null, [Validators.required]],
      fono_emergencia: [null, [Validators.required]],
      empresaRut: [null, [Validators.required]],
      empresaDvRut: [null, [Validators.required]],
      correoEmpresa: [null, [Validators.required]],
      regionEmpresa: [null, [Validators.required]],
      comunaEmpresa: [null, [Validators.required]],
      direccionEmpresa: [null, [Validators.required]],
      celProfesional: [null, [Validators.required]],
      rutProfesional: [null, [Validators.required]],
      apellidofesional: [null, [Validators.required]],

      rutTrabajador: [null, [Validators.required]],
      empleadoNombre: [null, [Validators.required]],
      numeroContactoEmnpleado: [null, [Validators.required]],
      correoEmpleado: [null, [Validators.required]]
    });
  }

  ngOnInit(): void {
    console.log('en el conmp de crear ');
    this.loadAlert();
  }

  loadAlert() {
    console.log('h ' + this.idUser.id);
    this.form.setValue({
      tipoaccidente: this.idUser.tipoaccidente,
      descripcion: this.idUser.descripcion,
      empresa: this.idUser.empresa,

      empresaRut: this.idUser.empresaRut,
      empresaDvRut: this.idUser.empresaDvRut,
      correoEmpresa: this.idUser.correoEmpresa,
      regionEmpresa: this.idUser.regionEmpresa,
      comunaEmpresa: this.idUser.comunaEmpresa,
      direccionEmpresa: this.idUser.direccionEmpresa,
      celProfesional: this.idUser.celProfesional,
      rutProfesional: this.idUser.rutProfesional,
      nombreProfesional: this.idUser.nombreProfesional,
      apellidofesional: this.idUser.apellidofesional,

      gravedad: this.idUser.gravedad,
      rutTrabajador: this.idUser.rutTrabajador,
      fechaaccidente: this.idUser.fechaaccidente,
      fono_emergencia: this.idUser.fono_emergencia,

      empleadoNombre: this.idUser.empleadoNombre,
      numeroContactoEmnpleado: this.idUser.numeroContactoEmnpleado,
      correoEmpleado: this.idUser.correoEmpleado

    });
  }
}
