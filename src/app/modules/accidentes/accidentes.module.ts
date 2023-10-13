import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccidentesRoutingModule } from './accidentes-routing.module';
import { AccidentesComponent } from './accidentes.component';
import { EditarComponent } from './editar/editar.component';
import { CrearComponent } from './crear/crear.component';
import { ListarComponent } from './listar/listar.component';

import { DateComponent} from '../../shared/date/date.component';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
import { ProgressBarModule} from 'primeng/progressbar';
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
    AccidentesComponent,
    EditarComponent,
    CrearComponent,
    ListarComponent,
    DateComponent
  ],
  imports: [
    CommonModule,
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
    AccidentesRoutingModule
  ]
})
export class AccidentesModule { }
