import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConfirmationService, Message, MessageService } from 'primeng/api';
import { DirectionService } from '../../../shared/Services/direccion/direction.service';
import { CompanyService } from '../../../shared/Services/Company/company.service';
import { Dropdown } from 'primeng/dropdown';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})

export class CreateComponent implements OnInit {

  @Output() backTable: EventEmitter<any> = new EventEmitter();
  @ViewChild('dropContract') dropContract: Dropdown;
  @ViewChild('dropFunction') dropFunction: Dropdown;
  @ViewChild('dropCompany') dropCompany: Dropdown;
  @ViewChild('dropNacionalidad') dropNacionalidad: Dropdown;

  @Input() isEdit: boolean;
  @Input() idUser: any;

  form: FormGroup;
  certificates;
  factura;
  branchOfficeId;
  msgs1: Message[];
  region;
  comuna;
  startDate: Date;
  endDate: Date;
  opstartDate: Date;
  opendDate: Date;
  costoTotal;
  costoTotalAccidente;
  costoTotalCharla;
  costoTotalVisita;
  costoTotalAsesoria;
  costoTotalAsesoriaEspecial;
  costoTotalPersonasExtra;
  totalAccidente;
  totalCharla;
  totalVisita;
  totalAsesoria;
  totalAsesoriaEspecial;
  totalPersonasExtra;
  date: Date;
  meses;

  constructor(private formbuilder: FormBuilder, private DirectionService: DirectionService, private CompanyService: CompanyService) {
    
    this.form = this.formbuilder.group({
      nom_empresa: [null, [Validators.required]],
      rut: [null, [Validators.required]],
      fechaCreacion: [null, [Validators.required]],
      fechaFinContrato: [null, [Validators.required]],
      correo: [null, [Validators.required]],
      direccion: [null, [Validators.required]],
      comuna: [null, [Validators.required]],
      region: [null, [Validators.required]],
      id_empresa: [null, [Validators.required]],
      numeroTelefonico: [null, [Validators.required]],
      actividadEconomica: [null, [Validators.required]],
      idPropiedadEmpresa: [null, [Validators.required]],
      idTipoDeEmpresa: [null, [Validators.required]],
      trabajadoresHombres: [null, [Validators.required]],
      trabajadoresMujeres: [null, [Validators.required]],
      //costos
      costoporaccidente: [null, [Validators.required]],
      costoporcharla: [null, [Validators.required]],
      costoporvisita: [null, [Validators.required]],
      costobase: [null, [Validators.required]],
      costoporasesoria: [null, [Validators.required]],
      costoporasesoriaespecial: [null, [Validators.required]],
      costoporpersonaextra: [null, [Validators.required]],
      cantidadDeEmpleadosPorContrato: [null, [Validators.required]],
      startDate: [new Date(), [Validators.required]],
      endDate: [new Date(), [Validators.required]],
      opstartDate: [new Date(), [Validators.required]],
      opendDate: [new Date(), [Validators.required]],
      //Factura
      costoTotal: [0, [Validators.required]],
      costoTotalAccidente: [0, [Validators.required]],
      costoTotalCharla: [0, [Validators.required]],
      costoTotalVisita: [0, [Validators.required]],
      costoTotalAsesoria: [0, [Validators.required]],
      costoTotalAsesoriaEspecial: [0, [Validators.required]],
      costoTotalPersonasExtra: [0, [Validators.required]],
      //Operaciones
      totalAccidente: [0, [Validators.required]],
      totalCharla: [0, [Validators.required]],
      totalVisita: [0, [Validators.required]],
      totalAsesoria: [0, [Validators.required]],
      totalAsesoriaEspecial: [0, [Validators.required]],
      totalPersonasExtra: [0, [Validators.required]]
    });
  }

  ngOnInit(): void {
    console.log('En detalle ' + this.idUser.id);
    this.loadOpcions();
  }

  async GetFacturaById() {
    (await this.CompanyService.GetFacturaById(this.idUser.id)).subscribe({
      next: data => {
        this.form.setValue({
          nom_empresa: data.nom_empresa,
          rut: data.rut + '-' + data.dvRut,
          fechaCreacion: data.fechaCreacion,
          fechaFinContrato: new Date(data.fechaFinContrato),
          correo: data.correo,
          direccion: data.direccion,
          comuna: data.comuna,
          region: data.region,
          id_empresa: data.id_empresa,
          numeroTelefonico: data.numeroTelefonico,
          actividadEconomica: data.actividadEconomica,
          idPropiedadEmpresa: data.idPropiedadEmpresa,
          idTipoDeEmpresa: data.idTipoDeEmpresa,
          trabajadoresHombres: data.trabajadoresHombres,
          trabajadoresMujeres: data.trabajadoresMujeres,
          //Costos
          costoporaccidente: data.costoporaccidente,
          costoporcharla: data.costoporcharla,
          costoporvisita: data.costoporvisita,
          costobase: data.costobase,
          costoporasesoria: data.costoporasesoria,
          costoporasesoriaespecial: data.costoporasesoriaespecial,
          costoporpersonaextra: data.costoporpersonaextra,
          cantidadDeEmpleadosPorContrato: data.cantidadDeEmpleadosPorContrato,
          startDate: new Date(),
          endDate: new Date(),
          opstartDate: new Date(),
          opendDate: new Date(),
          costoTotalAccidente: data.totalporaccidente,
          costoTotalCharla: data.totalporcharla,
          costoTotalVisita:  data.totalporvisita,
          costoTotalAsesoria: data.totalporasesoria,
          costoTotalAsesoriaEspecial:data.totalporasesoriaespecial,
          costoTotalPersonasExtra: data.totalporpersonaextra,

          totalAccidente: data.totalporaccidente,
          totalCharla: data.totalporcharla,
          totalVisita: data.totalporvisita,
          totalAsesoria: data.totalporasesoria,
          totalAsesoriaEspecial:data.totalporasesoriaespecial,
          totalPersonasExtra: data.totalporpersonaextra,
          costoTotal: data.iddetallefactura,
        });
        this.Region();
      }
    })
  }

  loadOpcions() {
    this.GetFacturaById();
  }

  async Region() {
    (await this.DirectionService.RegionList()).subscribe({
      next: data => {
        this.region = data
      }
    })
  }

  async Meses() {
    (await this.DirectionService.Meses()).subscribe({
      next: data => {
        this.meses = data
      }
    })
  }


  async ComunaByRegion(id) {
    (await this.DirectionService.GetComunaByRegion(id)).subscribe({
      next: data => {
        this.comuna = data;
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
