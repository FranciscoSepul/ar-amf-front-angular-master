import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FacturaRoutingModule } from './factura-routing.module';
import { CreateComponent } from './create/create.component';
import { EditarComponent } from './editar/editar.component';
import { ListarComponent } from './listar/listar.component';


@NgModule({
  declarations: [
    CreateComponent,
    EditarComponent,
    ListarComponent
  ],
  imports: [
    CommonModule,
    FacturaRoutingModule
  ]
})
export class FacturaModule { }
