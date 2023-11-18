import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { SelectItem} from 'primeng/api';
import { AccidentsService } from '../../../shared/Services/Accidents/accidents.service';
import { sortOptions } from '../../../core/common/constants';


@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent implements OnInit {

  Accidentes: any[];
  rows = 5;
  showLoader :boolean;
  isDisabled = false;
  details: any;
  sortOptions: SelectItem[];
  @Output() crearAccidente: EventEmitter<any> = new EventEmitter();
  @Output() detailAccident: EventEmitter<any> = new EventEmitter();

  constructor
    (private AccidentsService: AccidentsService, private router: Router) { }

  ngOnInit(): void {
    this.showLoader = false;
    this.sortOptions = [...sortOptions];
    this.getAllUsers();
  }

  Crear() {
    this.crearAccidente.emit();
  }
  async getAllUsers() {
    (await this.AccidentsService.List()).subscribe({
      next: data => {
        this.Accidentes = data;
        this.showLoader = true;
      },
      error(e) {
        this.helpers.checkPermission(this.messageService, e);
      }
    })
  }
  //confirmAction(id, name, isDisabled) {
   // this.active(id, !isDisabled);
 // }

  //async active(id: number, activation: boolean) {
   // try {
    //  let alert = this.Accidentes.find(x => x.run_usuario == id)
    //  if (alert) {
     //   alert.isdelete = 1
     //     ; (await this.UserServiceService.UserDisable(alert)).subscribe({
     //       next: () => {
     //         this.ngOnInit()
     //       }
     //     });
     // }
    //} catch (error) {
   // }
 // }
  onSortChange(event) {
    this.rows = event.value;
  }

  async seeEditar(id) {
    this.details = this.Accidentes.filter(x => x.id == id);
    this.detailAccident.emit(this.details[0]);
  }
}

