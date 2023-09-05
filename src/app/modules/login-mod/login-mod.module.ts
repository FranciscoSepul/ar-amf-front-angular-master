import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginCComponent } from './login-c/login-c.component';
import { UtilsModule } from '../utils/utils.module';



@NgModule({
  declarations: [
    LoginCComponent
  ],
  imports: [
    CommonModule,
    UtilsModule
  ]
})
export class LoginModModule { }
