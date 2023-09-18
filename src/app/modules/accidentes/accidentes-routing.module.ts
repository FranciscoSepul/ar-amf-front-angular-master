import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AccidentesComponent } from './accidentes.component';

const routes: Routes = [
  { path: '', component: AccidentesComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccidentesRoutingModule { }
