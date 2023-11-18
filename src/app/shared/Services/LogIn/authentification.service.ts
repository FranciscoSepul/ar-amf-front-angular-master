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

  public async LogIn(usuario: any, password: any){
      
     (await this.userServiceService.GetUser(usuario)).subscribe({
      next:data =>{
        sessionStorage.setItem('User', usuario);
        sessionStorage.setItem('IdTipoCuenta',  data.idtipocuenta);
        sessionStorage.setItem('IsLogin', 'true');
        this.http.get<any>(`https://backsecurity20231116221243.azurewebsites.net/api/User?user=${usuario}&pass=${password}`).subscribe(data => {
        sessionStorage.setItem('Token', data.token);
        });
      },
      error(e) {
        sessionStorage.setItem('IsLogin', 'false');
      }
     })
     return (sessionStorage.getItem('IsLogin') == 'true' &&  sessionStorage.getItem('IdTipoCuenta') !='null')  ? true : false;
  }

  public habilitar() {
    return sessionStorage.getItem('IsLogin') == 'true' ? true : false;
  }
}


