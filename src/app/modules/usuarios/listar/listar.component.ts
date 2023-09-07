import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { SelectItem, MessageService } from 'primeng/api';
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
  showLoader = false;
  sortOptions: SelectItem[];
  @Output() crearUsuario: EventEmitter<any> = new EventEmitter();
  @Output() detail: EventEmitter<number> = new EventEmitter();

  constructor
    (private UserServiceService: UserServiceService,private router:Router) { }

  ngOnInit(): void {
    this.showLoader = true;
    this.sortOptions = [...sortOptions];
    this.getAllUsers();

  }

  Crear() {
    console.log('dentro del create');
    this.crearUsuario.emit();
  }
  async getAllUsers() {
    (await this.UserServiceService.UserList()).subscribe({
      next: data => {
        console.log(data.items[1].run_usuario);
        this.usuarios = data.items;
      },
      error(e) {
        this.helpers.checkPermission(this.messageService, e);
      }
    })
  }
  onSortChange(event) {
    this.rows = event.value;
  }

  async seeEditar(id) {
    (await this.UserServiceService.GetUserById(id)).subscribe({
      next: () => {
        this.detail.emit(id);
      },
      error(e) {
        this.helpers.checkPermission(this.messageService, e);
      }
    })
  }
}
