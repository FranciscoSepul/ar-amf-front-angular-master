import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuariosComponent } from '../usuarios/usuarios.component';
import { ListarComponent } from './listar/listar.component';
import { CrearComponent } from './crear/crear.component';
import { EditarComponent } from './editar/editar.component';




@NgModule({
  declarations: [
    UsuariosComponent,
    ListarComponent,
    CrearComponent,
    EditarComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UsuariosModule { }
