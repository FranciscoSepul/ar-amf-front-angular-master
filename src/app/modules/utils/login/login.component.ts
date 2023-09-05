import { Component, Input } from '@angular/core';
import { UsersService } from '@core/services/users.service';
import { Router } from '@angular/router';
import { ToastComponent } from '../toast/toast.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [ToastComponent]
})
export class LoginComponent {

  @Input() logo: string;
  email: string;
  password: string;

  constructor(public userService: UsersService, public router: Router, private toast: ToastComponent) {}

  login() {
    const user = {email: this.email, password: this.password};
    this.userService.login(user).subscribe(
      data => {
      this.userService.setToken(data.token);
      this.router.navigateByUrl('/');
    },
    error => {
      this.toast.errorMessage('Error de login', 'Usuario o contraseña incorrecta')
      console.log(error);
    });
  }

}
