import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html'
})
export class UsuariosComponent {
  screen = "Listar";
  idUser = 0;
  isEdit = false;

  modificar() {
    this.screen = "modificar";
    this.isEdit = true;
  }
  public crearUsuario() {
    console.log('segundo 2 aca ');
    this.screen = "Crear";
    this.isEdit = false;
  }
  Listar() {
    this.screen = "Listar";
  }
  detailUser(id) {
    this.screen = "Detail";
    this.idUser = id;
  }
  backTable() {
    this.screen = "Listar";
  }
}
