import { Component, NgModule, OnInit } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from 'rxjs';
import { AuthentificationService } from 'src/app/shared/Services/LogIn/authentification.service';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  showSpinner: any;

  constructor(private router: Router,private log: AuthentificationService) {
  }
  @NgModule({
    imports:[
      MatFormFieldModule,
      MatInputModule
    ]
  })

  username!: string;
  password!: string;

  login(): void {
    if (!this.log.LogIn(this.username,this.password))
    {
      alert("Usuario o contraseña invalido");
    }
  }
}


