import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastModule } from 'primeng/toast';
import { FormsModule } from '@angular/forms';
import { ToastComponent } from './toast/toast.component';
import { MessageService } from 'primeng/api';


@NgModule({
  declarations: [
    ToastComponent
  ],
  imports: [
    CommonModule,
    ToastModule,
    FormsModule,
  ],
  exports: [
  ],
  providers: [
    MessageService
  ]
})
export class UtilsModule { }
