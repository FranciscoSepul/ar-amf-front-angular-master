import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { SelectItem, MessageService } from 'primeng/api';
import {UserServiceService} from '../../../shared/Services/Usuarios/user-service.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent implements OnInit {

  usuarios: any[];
  rows = 10;
  @Output() crear: EventEmitter<any> = new EventEmitter();
  @Output() detail: EventEmitter<number> = new EventEmitter();

  constructor
  (
    private UserServiceService: UserServiceService,
  ) { }

  ngOnInit(): void {
    console.log('en user');
    this.getAllUsers();
  }
  
  crearUsuario() {
    this.crear.emit();
  }
  async getAllUsers() {
    (await this.UserServiceService.UserList()).subscribe({
        next: data => {
            this.usuarios = data;
        },
        error(e){
            this.helpers.checkPermission(this.messageService, e);
        }
    })
}

}
