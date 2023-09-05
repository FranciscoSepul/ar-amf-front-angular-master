import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Token } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  constructor(private http: HttpClient) { }
  private ingresar: boolean = false
  private UserToken: any;
  public async LogIn(usuario: any, password: any): Promise<boolean> {

    await this.LoginToBackend(usuario, password);
    console.log('Token ', sessionStorage.getItem('Token'));
    if (sessionStorage.getItem('Token') != null && sessionStorage.getItem('Token') != '') {
      console.log('en if');
      sessionStorage.setItem('IsLogin', 'true');
      sessionStorage.setItem('Token', this.UserToken);
    } else {
      console.log('en else');
      sessionStorage.setItem('IsLogin', 'false');
    }
    return sessionStorage.getItem('IsLogin') == 'true' ? true : false;
  }
  public habilitar() {
    return sessionStorage.getItem('IsLogin') == 'true' ? true : false;
  }
  LoginToBackend(user: string, pass: string) {
    this.http.get<any>(`http://localhost:5006/api/User?user=${user}&pass=${pass}`).subscribe(data => {
      console.log('en login ', data.token);
      sessionStorage.setItem('Token', data.token);
      return data.Token;
    });
  }
}


