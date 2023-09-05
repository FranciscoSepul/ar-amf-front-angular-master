import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ToastModule } from 'primeng/toast';
import { FormsModule } from '@angular/forms';
import { ToastComponent } from './toast/toast.component';
import { MessageService } from 'primeng/api';


@NgModule({
  declarations: [
    LoginComponent,
    ToastComponent
  ],
  imports: [
    CommonModule,
    ToastModule,
    FormsModule,
  ],
  exports: [
    LoginComponent
  ],
  providers: [
    MessageService
  ]
})
export class UtilsModule { }
