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
          Detalle: 'Pago Factura ' + data.nom_empresa
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
