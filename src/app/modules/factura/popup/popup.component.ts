import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { CompanyService } from '../../../shared/Services/Company/company.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})

export class PopupComponent {
  @Input() itemId: number;
  formb: FormGroup;

  constructor(private CompanyService: CompanyService, private modalService: NgbModal) {
    //this.formb = this.fb.group({
    
    // });
    this.formb = new FormGroup({
      idTransaccion: new FormControl(),
      Detalle: new FormControl(),
      Monto: new FormControl(),
    });
  }

  ngOnInit(): void {
    console.log(this.itemId);
    this.GetFacturaById();

  }

  async GetFacturaById() {
    (await this.CompanyService.GetFacturaById(this.itemId)).subscribe({
      next: data => {
        this.formb.setValue({
          idTransaccion: this.itemId,
          Monto: data.iddetallefactura,
          Detalle: 'Pago Factura ' + data.nom_empresa,
          //rut: data.rut + '-' + data.dvRut,
          //fechaCreacion: data.fechaCreacion,
          //fechaFinContrato: new Date(data.fechaFinContrato),
          //correo: data.correo,
          // direccion: data.direccion,
          // comuna: data.comuna,
          // region: data.region,
          // id_empresa: data.id_empresa,
          // numeroTelefonico: data.numeroTelefonico,
          // actividadEconomica: data.actividadEconomica,
          //idPropiedadEmpresa: data.idPropiedadEmpresa,
          // idTipoDeEmpresa: data.idTipoDeEmpresa,
          // trabajadoresHombres: data.trabajadoresHombres,
          // trabajadoresMujeres: data.trabajadoresMujeres,
          //Costos
          //  costoporaccidente: data.costoporaccidente,
          //  costoporcharla: data.costoporcharla,
          //  costoporvisita: data.costoporvisita,
          //  costobase: data.costobase,
          //  costoporasesoria: data.costoporasesoria,
          //  costoporasesoriaespecial: data.costoporasesoriaespecial,
          //  costoporpersonaextra: data.costoporpersonaextra,
          //  cantidadDeEmpleadosPorContrato: data.cantidadDeEmpleadosPorContrato,
          //  startDate: new Date(),
          //  endDate: new Date(),
          //  opstartDate: new Date(),
          // opendDate: new Date(),
          // costoTotalAccidente: data.totalporaccidente,
          // costoTotalCharla: data.totalporcharla,
          // costoTotalVisita:  data.totalporvisita,
          // costoTotalAsesoria: data.totalporasesoria,
          //costoTotalAsesoriaEspecial:data.totalporasesoriaespecial,
          // costoTotalPersonasExtra: data.totalporpersonaextra,

          // totalAccidente: data.totalporaccidente,
          // totalCharla: data.totalporcharla,
          // totalVisita: data.totalporvisita,
          //totalAsesoria: data.totalporasesoria,
          //totalAsesoriaEspecial:data.totalporasesoriaespecial,
          //totalPersonasExtra: data.totalporpersonaextra,

        });
      }
    })
  }

  confirmAction() {
    this.Facture(this.itemId);
  }
  close() {
    this.modalService.dismissAll(PopupComponent);
  }
  async Facture(id: number) {
    (await this.CompanyService.FactureByCompanyById(id)).subscribe({
      next: data => {
        this.modalService.dismissAll(PopupComponent);
      },
      error(e) {
        this.helpers.checkPermission(this.messageService, e);
      }
    })
  }

}
