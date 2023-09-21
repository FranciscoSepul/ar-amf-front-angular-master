import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MessageModule } from 'primeng/message';
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
import { CompanyRoutingModule } from './company-routing.module';
import { ListarComponent } from './listar/listar.component';
import { EditarComponent } from './editar/editar.component';
import { CrearComponent } from './crear/crear.component';
import {CompanyComponent} from './company.component';
import { CalendarModule } from 'primeng/calendar';

@NgModule({
  declarations: [
    ListarComponent,
    EditarComponent,
    CrearComponent,
    CompanyComponent,
    DateComponent
  ],
  imports: [
    CommonModule,
    CompanyRoutingModule,
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
    CalendarModule
  ]
})
export class CompanyModule { }
