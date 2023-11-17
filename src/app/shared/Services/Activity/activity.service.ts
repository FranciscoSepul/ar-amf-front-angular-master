import { Injectable } from '@angular/core';
import { HttpService } from '../Service/http.service';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  constructor(private httpService: HttpService) { }

  public async List(){
    let url = `https://backsecurity20231116221243.azurewebsites.net/api/Actividades/GetAllActivity`
    return this.httpService.getJson<any>(url);
  }
  public async GetActivityById(id) {
    let url = `https://backsecurity20231116221243.azurewebsites.net/api/Actividades/GetActivityById?id=${id}`
    return this.httpService.getJson<any>(url);
  }
  public async ListTema(){
    let url = `https://backsecurity20231116221243.azurewebsites.net/api/Actividades/GetAllTemas`
    return this.httpService.getJson<any>(url);
  }
  public async Implementos(){
    let url = `https://backsecurity20231116221243.azurewebsites.net/api/Actividades/GetAllImplementos`
    return this.httpService.getJson<any>(url);
  }
  public async Create(data: any) {
    let url = `https://backsecurity20231116221243.azurewebsites.net/api/Actividades/Create`
    return this.httpService.postJson<any>(url, data);
  }
  public async Update(data: any) {
    let url = `https://backsecurity20231116221243.azurewebsites.net/api/Actividades/Create`
    return this.httpService.putJson<any>(url, data);
  }
}
