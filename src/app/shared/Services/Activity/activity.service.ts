import { Injectable } from '@angular/core';
import { HttpService } from '../Service/http.service';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  constructor(private httpService: HttpService) { }

  public async List(){
    let url = `http://localhost:5006/api/Actividades/GetAllActivity`
    return this.httpService.getJson<any>(url);
  }
  public async ListTema(){
    let url = `http://localhost:5006/api/Actividades/GetAllTemas`
    return this.httpService.getJson<any>(url);
  }
  public async Implementos(){
    let url = `http://localhost:5006/api/Actividades/GetAllImplementos`
    return this.httpService.getJson<any>(url);
  }
  public async Create(data: any) {
    let url = `http://localhost:5006/api/Actividades/Create`
    return this.httpService.postJson<any>(url, data);
  }
  public async Update(data: any) {
    let url = `http://localhost:5006/api/Actividades/Create`
    return this.httpService.putJson<any>(url, data);
  }
}
