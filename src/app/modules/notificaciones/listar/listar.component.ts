import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { SelectItem} from 'primeng/api';
import { NotificationsService } from '../../../shared/Services/Notifications/notifications.service';
import { UserServiceService } from '../../../shared/Services/Usuarios/user-service.service';
import { sortOptions } from '../../../core/common/constants';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent implements OnInit {

  usuarios: any[];
  rows = 5;
  showLoader :boolean;
  isDisabled = false;
  details: any;
  sortOptions: SelectItem[];
  @Output() crearUsuario: EventEmitter<any> = new EventEmitter();
  @Output() detailUser: EventEmitter<any> = new EventEmitter();

  constructor
    (private NotificationsService: NotificationsService,private UserServiceService:UserServiceService, private router: Router) { }

  ngOnInit(): void {
    this.showLoader = false;
    this.sortOptions = [...sortOptions];
    this.getAllNotification();
  }

  Crear() {
    this.crearUsuario.emit();
  }
  async getAllNotification() {
    (await this.NotificationsService.List()).subscribe({
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
    this.details = this.usuarios.filter(x => x.run_usuario == id);
    this.detailUser.emit(this.details[0]);
  }
}


