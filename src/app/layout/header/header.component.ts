import { Component } from "@angular/core";
import { UserServiceService } from '../../shared/Services/Usuarios/user-service.service';

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent {
  user: string;

  constructor(private userServiceService: UserServiceService) {
  }
  toogleMenu() {
    const element = document.getElementById("sidebar-wrapper");
    element.classList.toggle("toggled");
  }
  toogleOffside() {
    const element = document.getElementById("offsidebar-wrapper");
    element.classList.toggle("toggled");
  }
  showNotification() { }

  async getUser() {
    let user =  sessionStorage.getItem('User');
    (await this.userServiceService.GetUser(user)).subscribe(async (data) => {
      this.user = data?.nom_usuario;
    });
  }
  ngOnInit(): void {
    this.getUser();
  }
}
