import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuariosComponent } from '../usuarios/usuarios.component';
import { ListarComponent } from './listar/listar.component';
import { CrearComponent } from './crear/crear.component';
import { EditarComponent } from './editar/editar.component';
import { MessageModule } from 'primeng/message';
import { ConfigMensajesRoutingModule } from './Usuarios-routing.module';
import {DateComponent} from '../../shared/date/date.component';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';


@NgModule({
  declarations: [
    UsuariosComponent,
    ListarComponent,
    CrearComponent,
    EditarComponent,
    DateComponent
  ],
  imports: [
    CommonModule,
    MessageModule,
    ConfigMensajesRoutingModule,
    CardModule,
    TableModule
  ]
})
export class UsuariosModule {
  ngOnInit(): void {
    console.log('en user');
  }

}
