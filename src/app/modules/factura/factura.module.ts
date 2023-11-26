import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FacturaRoutingModule } from './factura-routing.module';
import { FacturaComponent } from './factura.component';
import { CreateComponent } from './create/create.component';
import { EditarComponent } from './editar/editar.component';
import { ListarComponent } from './listar/listar.component';

import { MessageModule } from 'primeng/message';
import { DateComponent } from '../../shared/date/date.component';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
import { ProgressBarModule } from 'primeng/progressbar';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { MessagesModule } from 'primeng/messages';
import { InputNumberModule } from "primeng/inputnumber";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputSwitchModule } from 'primeng/inputswitch';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";
import { CalendarModule } from 'primeng/calendar';
import { PopupComponent } from './popup/popup.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    FacturaComponent,
    CreateComponent,
    EditarComponent,
    ListarComponent,
    PopupComponent

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
    CalendarModule,
    DateComponent,
    FacturaRoutingModule
    
  ]
})
export class FacturaModule { }
