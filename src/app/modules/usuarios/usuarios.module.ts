import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuariosComponent } from '../usuarios/usuarios.component';
import { ListarComponent } from './listar/listar.component';
import { CrearComponent } from './crear/crear.component';
import { EditarComponent } from './editar/editar.component';
import { MessageModule } from 'primeng/message';
import { ConfigMensajesRoutingModule } from './Usuarios-routing.module';
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
@NgModule({
  declarations: [
    UsuariosComponent,
    ListarComponent,
    CrearComponent,
    EditarComponent
    
  ],
  imports: [
    CommonModule,
    MessageModule,
    ConfigMensajesRoutingModule,
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
export class UsuariosModule {

}
