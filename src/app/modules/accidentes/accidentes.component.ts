import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accidentes',
  templateUrl: './accidentes.component.html'
})
export class AccidentesComponent  {

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
