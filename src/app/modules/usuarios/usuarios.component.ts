import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html'
})
export class UsuariosComponent{
  screen = "Listar";
  idMensaje;

    modificar(id) {
        this.screen = "modificar";
        this.idMensaje = id;
    }

    Listar() {
        this.screen = "Listar";
    }
}
