import { Injectable } from '@angular/core';
import { HttpService } from '../Service/http.service';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private httpService: HttpService) { }
  
  public async CompanyList(){
    let url = `http://localhost:5006/api/Company/GetAllCompany`
    return this.httpService.getJson<any>(url);
  }
  public async GetCompanyById(id) {
    let url = `http://localhost:5006/api/Company/GetCompanyById?id=${id}`
    return this.httpService.getJson<any>(url);
  }
  public async GetFacturaById(id) {
    let url = `http://localhost:5006/api/Company/GetFacturaById?id=${id}`
    return this.httpService.getJson<any>(url);
  }
  public async FactureByCompanyById(id) {
    let url = `https://backsecurity20231116221243.azurewebsites.net/api/Company/FactureByCompany?id=${id}`
    return this.httpService.getJson<any>(url);
  }
  public async GetFacturaCompany(id,Desde) {
    let url = `https://backsecurity20231116221243.azurewebsites.net/api/Company/GetCompanyFactura?id=${id}&desde=${Desde}`
    return this.httpService.getJson<any>(url);
  }
  public async GetAllFacturas(){
    let url = `https://backsecurity20231116221243.azurewebsites.net/api/Company/GetAllFacturas`
    return this.httpService.getJson<any>(url);
  }  
  public async GetOperacionesCompany(id,Desde) {
    let url = `https://backsecurity20231116221243.azurewebsites.net/api/Company/GetCompanyOperaciones?id=${id}&desde=${Desde}`
    return this.httpService.getJson<any>(url);
  }
  public async CompanyListNotDisable(){
    let url = `https://backsecurity20231116221243.azurewebsites.net/api/Company/GetAllCompanyNotDisable`
    return this.httpService.getJson<any>(url);
  }
  public async CompanyCreate(data: any) {
    let url = `http://localhost:5006/api/Company/Create`
    return this.httpService.postJson<any>(url, data);
  }
  public async CompanyUpdate(data: any) {
    let url = `http://localhost:5006/api/Company/Update`
    return this.httpService.putJson<any>(url, data);
  }
  public async CompanyDisable(data: any) {
    let url = `https://backsecurity20231116221243.azurewebsites.net/api/Company/Disable`
    return this.httpService.putJson<any>(url, data);
  }
  //
  public async NotificationCreate(data: any) {
  let url = `https://backsecurity20231116221243.azurewebsites.net/api/Notificaciones/Create`
  return this.httpService.postJson<any>(url, data);
  }
  public async ListTipoNotificacion(){
    let url = `https://backsecurity20231116221243.azurewebsites.net/api/Notificaciones/GetAllTipoNotification`
    return this.httpService.getJson<any>(url);
  }

  public async PropiedadEmpresaList(){
    let url = `http://localhost:5006/api/Company/ListPropiedadEmpresa`
    return this.httpService.getJson<any>(url);
  }
  public async TipoEmpresaList(){
    let url = `http://localhost:5006/api/Company/ListTipoEmpresa`
    return this.httpService.getJson<any>(url);
  }
}

