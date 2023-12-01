import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccidentsService } from '../../../shared/Services/Accidents/accidents.service';
import { CompanyService } from '../../../shared/Services/Company/company.service';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.scss']
})
export class CrearComponent implements OnInit {

  @Input() isEdit: boolean;
  @Input() idUser: any;
  form: FormGroup;
  propiedad;
  tipoE;

  constructor(private formbuilder: FormBuilder, private CompanyService: CompanyService, private AccidentsService: AccidentsService) {
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
      correoEmpleado: [null, [Validators.required]],
      direccionTrabajador: [null, [Validators.required]],
      comunaTrabajador: [null, [Validators.required]],
      nacionalidad: [null, [Validators.required]],
      sexo: [null, [Validators.required]],
      edad: [null, [Validators.required]],
      fechaNacimiento: [null, [Validators.required]],
      puebloOriginario: [null, [Validators.required]],
      profesionTrabajador: [null, [Validators.required]],
      antiguedad: [null, [Validators.required]],
      tipoDeContratoTrabajador: [null, [Validators.required]],
      categoriaOcupacional: [null, [Validators.required]],
      tipoDeIngreso: [null, [Validators.required]],
      horaAccidente: [null, [Validators.required]],
      horaIngresoAlTrabajo: [null, [Validators.required]],
      horaSalidaTrabajo: [null, [Validators.required]],
      tipoDeAccidente: [null, [Validators.required]],
      medioDePrueba: [null, [Validators.required]],
      numeroTelefonico: [null, [Validators.required]],
      actividadEconomica: [null, [Validators.required]],
      propiedad: [null, [Validators.required]],
      tipoE: [null, [Validators.required]],
      trabajadoresHombres: [null, [Validators.required]],
      trabajadoresMujeres: [null, [Validators.required]],
      clasificacionDenunciante: [null, [Validators.required]]
    });
  }

  ngOnInit(): void {
    this.Propiedad();
    this.TipoE();
    this.loadAlert();
  }

  async Propiedad() {
    (await this.CompanyService.PropiedadEmpresaList()).subscribe({
      next: data => {
        this.propiedad = data
      }
    })
  }

  async TipoE() {
    (await this.CompanyService.TipoEmpresaList()).subscribe({
      next: data => {
        this.tipoE = data
      }
    })
  }
  async loadAlert() {
    (await this.AccidentsService.GetAccidentById(this.idUser.id)).subscribe({
      next: data => {
        this.form.setValue({
          tipoaccidente: data.tipoaccidente,
          descripcion: data.descripcion,
          empresa: data.empresa,
          numeroTelefonico: data.numeroTelefonico,
          actividadEconomica: data.actividadEconomica,
          propiedad: Number(data.idPropiedadEmpresa),
          tipoE: Number(data.idTipoDeEmpresa),
          trabajadoresHombres: data.trabajadoresHombres,
          trabajadoresMujeres: data.trabajadoresMujeres,
          empresaRut: data.empresaRut,
          empresaDvRut: data.empresaDvRut,
          correoEmpresa: data.correoEmpresa,
          regionEmpresa: data.regionEmpresa,
          comunaEmpresa: data.comunaEmpresa,
          direccionEmpresa: data.direccionEmpresa,
          celProfesional: data.celProfesional,
          rutProfesional: data.rutProfesional,
          nombreProfesional: data.nombreProfesional,
          apellidofesional: data.apellidofesional,
          gravedad: data.gravedad,
          rutTrabajador: data.rutTrabajador,
          fechaaccidente: data.fechaaccidente,
          fono_emergencia: data.fono_emergencia,
          empleadoNombre: data.empleadoNombre,
          numeroContactoEmnpleado: data.numeroContactoEmnpleado,
          correoEmpleado: data.correoEmpleado,
          direccionTrabajador: data.direccionTrabajador,
          comunaTrabajador: data.comunaTrabajador,
          nacionalidad: data.nacionalidad,
          sexo: data.sexo,
          edad: data.edad,
          fechaNacimiento: data.fechaNacimiento,
          puebloOriginario: data.puebloOriginario,
          profesionTrabajador: data.profesionTrabajador,
          antiguedad: data.antiguedad,
          tipoDeContratoTrabajador: data.tipoDeContratoTrabajador,
          categoriaOcupacional: data.categoriaOcupacional,
          tipoDeIngreso: data.tipoDeIngreso,
          horaAccidente: data.horaAccidente,
          horaIngresoAlTrabajo:data.horaIngresoAlTrabajo,
          horaSalidaTrabajo: data.horaSalidaTrabajo,
          tipoDeAccidente: data.tipoDeAccidente,
          medioDePrueba: data.medioDePrueba,
          clasificacionDenunciante:data.clasificacionDenunciante
    
        });
      },
      error(e) {
        this.helpers.checkPermission(this.messageService, e);
      }
    })
   
  }
}
