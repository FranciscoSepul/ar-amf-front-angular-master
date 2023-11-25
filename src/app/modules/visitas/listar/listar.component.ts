import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { SelectItem} from 'primeng/api';
import { sortOptions } from '../../../core/common/constants';
import { VisitasService } from '@shared/Services/Visitas/visitas.service';


@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent implements OnInit {

  usuarios: any[];
  rows = 5;
  showLoader : boolean;
  isDisabled = false;
  details: any;
  sortOptions: SelectItem[];
  @Output() crearUsuario: EventEmitter<any> = new EventEmitter();
  @Output() detailUser: EventEmitter<any> = new EventEmitter();

  constructor
    (private VisitasService: VisitasService, private router: Router) { }

  ngOnInit(): void {
    this.showLoader = false;
    this.sortOptions = [...sortOptions];
    this.getAllUsers();
  }

  Crear() {
    this.crearUsuario.emit();
  }
  async getAllUsers() {
    (await this.VisitasService.List()).subscribe({
      next: data => {
        this.usuarios = data;
        this.showLoader = true;
      },
      error(e) {
        this.helpers.checkPermission(this.messageService, e);
      }
    })
  }
  confirmAction(id, name, isDisabled) {
    this.active(id, !isDisabled);
  }

  async active(id: number, activation: boolean) {
    try {
      let alert = this.usuarios.find(x => x.run_usuario == id)
      if (alert) {
        alert.isdelete = 1
          ; (await this.VisitasService.UserDisable(alert)).subscribe({
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
    this.details = this.usuarios.filter(x => x.run_usuario == id);
    this.detailUser.emit(this.details[0]);
  }
}
