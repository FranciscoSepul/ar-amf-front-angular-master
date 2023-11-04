import { Injectable } from '@angular/core';
import { HttpService } from '../Service/http.service';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private httpService: HttpService) { }
  
  public async CompanyList(){
    let url = `https://backsecurity.azurewebsites.net/api/Company/GetAllCompany`
    return this.httpService.getJson<any>(url);
  }
  public async GetCompanyById(id) {
    let url = `https://backsecurity.azurewebsites.net/api/Company/GetCompanyById?id=${id}`
    return this.httpService.getJson<any>(url);
  }
  public async GetFacturaCompany(id,Desde) {
    let url = `http://localhost:5006/api/Company/GetCompanyFactura?id=${id}&desde=${Desde}`
    return this.httpService.getJson<any>(url);
  }
  public async GetAllFacturas(){
    let url = `https://backsecurity.azurewebsites.net/api/Company/GetAllFacturas`
    return this.httpService.getJson<any>(url);
  }  
  public async GetOperacionesCompany(id,Desde) {
    let url = `http://localhost:5006/api/Company/GetCompanyOperaciones?id=${id}&desde=${Desde}`
    return this.httpService.getJson<any>(url);
  }
  public async CompanyListNotDisable(){
    let url = `https://backsecurity.azurewebsites.net/api/Company/GetAllCompanyNotDisable`
    return this.httpService.getJson<any>(url);
  }
  public async CompanyCreate(data: any) {
    let url = `https://backsecurity.azurewebsites.net/api/Company/Create`
    return this.httpService.postJson<any>(url, data);
  }
  public async CompanyUpdate(data: any) {
    let url = `https://backsecurity.azurewebsites.net/api/Company/Update`
    return this.httpService.putJson<any>(url, data);
  }
  public async CompanyDisable(data: any) {
    let url = `https://backsecurity.azurewebsites.net/api/Company/Disable`
    return this.httpService.putJson<any>(url, data);
  }
  //
  public async NotificationCreate(data: any) {
  let url = `https://backsecurity.azurewebsites.net/api/Notificaciones/Create`
  return this.httpService.postJson<any>(url, data);
  }
  public async ListTipoNotificacion(){
    let url = `https://backsecurity.azurewebsites.net/api/Notificaciones/GetAllTipoNotification`
    return this.httpService.getJson<any>(url);
  }
}

