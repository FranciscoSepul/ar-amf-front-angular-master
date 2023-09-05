import { Component, OnInit } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from 'rxjs';
import { AuthentificationService } from 'src/app/shared/Services/LogIn/authentification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  showSpinner: any;

  constructor(private router: Router,private log: AuthentificationService) {
  }

  username!: string;
  password!: string;

  ngOnInit() {
  }

  login(): void {
    if (!this.log.LogIn(this.username,this.password))
    {
      alert("Usuario o contraseña invalido");
    }
  }
}


