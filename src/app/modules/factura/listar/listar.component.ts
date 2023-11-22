import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { SelectItem } from 'primeng/api';
import { sortOptions } from '../../../core/common/constants';
import { CompanyService } from '../../../shared/Services/Company/company.service';


@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent implements OnInit {

  showLoader: boolean;
  sortOptions: SelectItem[];
  company: any[];
  details: any;
  rows = 5;

  @Output() crearCompany: EventEmitter<any> = new EventEmitter();
  @Output() detailCompany: EventEmitter<any> = new EventEmitter();

  constructor
    (private CompanyService: CompanyService, private router: Router) { }


  ngOnInit(): void {
    this.showLoader = false;
    this.sortOptions = [...sortOptions];
    this.getAllFactura();
  }
  async getAllFactura() {
    (await this.CompanyService.GetAllFacturas()).subscribe({
      next: data => {
        this.company = data;
        this.showLoader = true;
      },
      error(e) {
        this.helpers.checkPermission(this.messageService, e);
      }
    })
  }
  Crear() {
    this.crearCompany.emit();
  }

  confirmAction(id) {
    this.Facture(id);
  }

  async Facture(id:number){
    (await this.CompanyService.FactureByCompanyById(id)).subscribe({
      next: data => {
        this.getAllFactura();
      },
      error(e) {
        this.helpers.checkPermission(this.messageService, e);
      }
    })
  }

  async active(id: number, activation: boolean) {
    try {
      console.log('id '+id);
      let alert = this.company.find(x => x.id_empresa == id)
      if (alert) {
        alert.isdelete = 1
          ; (await this.CompanyService.CompanyDisable(alert)).subscribe({
            next: () => {
              this.ngOnInit()
            }
          });
      }
    } catch (error) {
    }
  }

  onSortChange(event) {
    this.rows = event.value;
  }

  async seeEditar(id) {
    this.details = this.company.filter(x => x.id == id);
    this.detailCompany.emit(this.details[0]);
  }
}
