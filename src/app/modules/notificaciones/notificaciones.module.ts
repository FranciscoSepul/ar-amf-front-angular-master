import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotificacionesRoutingModule } from './notificaciones-routing.module';
import { NotificacionesComponent } from './notificaciones.component';
import { ListarComponent } from './listar/listar.component';
import { CrearComponent } from './crear/crear.component';
import { EditarComponent } from './editar/editar.component';

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
    NotificacionesComponent,
    ListarComponent,
    CrearComponent,
    EditarComponent,
    DateComponent
  ],
  imports: [
    CommonModule,
    NotificacionesRoutingModule,
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
    MatFormFieldModule
  ]
})
export class NotificacionesModule { }
