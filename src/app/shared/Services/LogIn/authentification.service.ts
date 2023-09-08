import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Token } from '@angular/compiler';
import { UserServiceService } from '../../../shared/Services/Usuarios/user-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  constructor(private http: HttpClient,private userServiceService: UserServiceService) { }
  private ingresar: boolean = false
  private UserToken: any;
  public async LogIn(usuario: any, password: any): Promise<boolean> {

    sessionStorage.setItem('User', usuario);
    this.getUser();
    this.LoginToBackend(usuario, password);

    if (sessionStorage.getItem('Token') != null && sessionStorage.getItem('Token') != '') {
      sessionStorage.setItem('IsLogin', 'true');
      sessionStorage.setItem('Token', this.UserToken);
    } else {
      sessionStorage.setItem('IsLogin', 'false');
    }
    return (sessionStorage.getItem('IsLogin') == 'true' &&  sessionStorage.getItem('IdTipoCuenta') !='null')  ? true : false;
  }
  public habilitar() {
    return sessionStorage.getItem('IsLogin') == 'true' ? true : false;
  }
  LoginToBackend(user: string, pass: string) {
    this.http.get<any>(`http://localhost:5006/api/User?user=${user}&pass=${pass}`).subscribe(data => {
      sessionStorage.setItem('Token', data.token);
      return data.Token;
    });
  }

  async getUser() {
    let user = sessionStorage.getItem('User');
    const promise = (await this.userServiceService.GetUser(user)).toPromise();
    return promise.then(
      (response: any) => {
        sessionStorage.setItem('IdTipoCuenta',  response.idtipocuenta);
      }
    ).catch((error: any) => {
      console.log(error);
    });
  }
}


