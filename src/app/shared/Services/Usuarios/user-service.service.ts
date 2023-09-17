import { Injectable } from '@angular/core';
import { HttpService } from '../Service/http.service';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private httpService: HttpService) { }

  public async UserList(){
    let url = `http://localhost:5006/api/User/List`
    return this.httpService.getJson<any>(url);
  }
  public async CompanyList(){
    let url = `http://localhost:5006/api/Company/GetAllCompany`
    return this.httpService.getJson<any>(url);
  }
  public async ContractList(){
    let url = `http://localhost:5006/api/User/GetTipoContrato`
    return this.httpService.getJson<any>(url);
  }
  public async NationalityList(){
    let url = `http://localhost:5006/api/User/GetPaises`
    return this.httpService.getJson<any>(url);
  }
  public async FunctionList(){
    let url = `http://localhost:5006/api/User/ListFunction`
    return this.httpService.getJson<any>(url);
  }
  public async GetUserById(id){
    let url = `http://localhost:5006/api/User/List`
    return this.httpService.getJson<any>(url);
  }
  public async GetUser(user){
    let url = `http://localhost:5006/api/User/GetWorkerInfo?UserName=${user}`
    return this.httpService.getJson<any>(url);
  }
  public async UserCreate(data:any){
    let url = `http://localhost:5006/api/User/Create`
    return this.httpService.postJson<any>(url,data);
  }
  public async UserUpdate(data:any){
    let url = `http://localhost:5006/api/User/Update`
    return this.httpService.putJson<any>(url,data);
  }
  public async UserDisable(data:any){
    let url = `http://localhost:5006/api/User/Disable`
    return this.httpService.putJson<any>(url,data);
  }
}
