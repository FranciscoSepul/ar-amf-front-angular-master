import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html'
})

export class UsuariosComponent {
  screen = "Listar";
  idUser :any;
  isEdit = false;

  crearUsuario() {
    this.screen = "Crear";
    this.isEdit = false;
  }
  Listar() {
    this.screen = "Listar";
  }
  detailUser(idUser) {
    this.screen = "Crear";
    this.idUser = idUser;
    this.isEdit = true;
  }
  backTable() {
    this.screen = "Listar";
  }
}
