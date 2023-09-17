import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { SelectItem} from 'primeng/api';
import { sortOptions } from '../../../core/common/constants';
import { UserServiceService } from '../../../shared/Services/Usuarios/user-service.service';


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

  @Output() crearUsuario: EventEmitter<any> = new EventEmitter();
  @Output() detailUser: EventEmitter<any> = new EventEmitter();

  constructor
    (private UserServiceService: UserServiceService, private router: Router) { }


  ngOnInit(): void {
    this.showLoader = false;
    this.sortOptions = [...sortOptions];
    this.getAllUsers();
  }
  async getAllUsers() {
    (await this.UserServiceService.UserList()).subscribe({
      next: data => {
        this.company = data;
        this.showLoader=true;
      },
      error(e) {
        this.helpers.checkPermission(this.messageService, e);
      }
    })
  }
  Crear() {
    this.crearUsuario.emit();
  }

  confirmAction(id, name, isDisabled) {
    this.active(id, !isDisabled);
  }

  async active(id: number, activation: boolean) {
    try {
      let alert = this.company.find(x => x.run_usuario == id)
      if (alert) {
        alert.isdelete = 1
          ; (await this.UserServiceService.UserDisable(alert)).subscribe({
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
    this.details = this.company.filter(x => x.run_usuario == id);
    this.detailUser.emit(this.details[0]);
  }
}
