import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccidentesRoutingModule } from './accidentes-routing.module';
import { AccidentesComponent } from './accidentes.component';


@NgModule({
  declarations: [
    AccidentesComponent
  ],
  imports: [
    CommonModule,
    AccidentesRoutingModule
  ]
})
export class AccidentesModule { }
