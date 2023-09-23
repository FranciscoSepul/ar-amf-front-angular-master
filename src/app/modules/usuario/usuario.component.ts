import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html'
})
export class UsuarioComponent  {
  screen = "Crear";
  idUser :any;
  isEdit = (sessionStorage.getItem('IdTipoCuenta')=="1")?true:false;

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
