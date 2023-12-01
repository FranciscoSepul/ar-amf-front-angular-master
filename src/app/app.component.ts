import { Component } from "@angular/core";
import { AuthentificationService } from "@shared/Services/LogIn/authentification.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {

  constructor(private login: AuthentificationService) {

  }
  public isLoggedIn(): boolean
  {
    return this.login.habilitar();
  }
}
