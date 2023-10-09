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
}
