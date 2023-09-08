import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html'
})
export class UsuariosComponent {
  screen = "Listar";
  idUser :any;
  isEdit = false;

  //modificar(idUser) {
   // console.log('modificar');
    //this.screen = "Crear";
    //this.idUser = idUser;
    //this.isEdit = true;
 // }
  crearUsuario() {
    this.screen = "Crear";
    this.isEdit = false;
  }
  Listar() {
    this.screen = "Listar";
  }
  detailUser(idUser) {
    console.log('Detail user');
    console.log('aa '+idUser.run_usuario);
    this.screen = "Crear";
    this.idUser = idUser;
    this.isEdit = true;
  }
  backTable() {
    this.screen = "Listar";
  }
}
