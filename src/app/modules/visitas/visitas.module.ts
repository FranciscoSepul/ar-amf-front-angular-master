import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VisitasRoutingModule } from './visitas-routing.module';
import {VisitasComponent} from './visitas.component';
import { ListarComponent } from './listar/listar.component';
import { CrearComponent } from './crear/crear.component';
import { EditarComponent } from './editar/editar.component';

import { ProgressBarModule} from 'primeng/progressbar';
import { DateComponent} from '../../shared/date/date.component';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { MessagesModule } from 'primeng/messages';
import { InputNumberModule } from "primeng/inputnumber";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputSwitchModule } from 'primeng/inputswitch';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MessageModule } from 'primeng/message';

@NgModule({
  declarations: [
    ListarComponent,
    CrearComponent,
    EditarComponent,
    VisitasComponent
  ],
  imports: [
    CommonModule,
    VisitasRoutingModule,
    MessageModule,
    CardModule,
    TableModule,
    DropdownModule,
    ProgressBarModule,
    ConfirmDialogModule,
    MessagesModule,
    InputNumberModule,
    FormsModule,
    ReactiveFormsModule,
    ConfirmDialogModule,
    InputSwitchModule,
    MatInputModule,
    MatFormFieldModule,
    DateComponent
  ]
})
export class VisitasModule { }
