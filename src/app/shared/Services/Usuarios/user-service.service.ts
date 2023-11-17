import { Injectable } from '@angular/core';
import { HttpService } from '../Service/http.service';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private httpService: HttpService) { }

  public async UserList(){
    let url = `https://backsecurity20231116221243.azurewebsites.net/api/User/List`
    return this.httpService.getJson<any>(url);
  }
  public async ProfesionalList(id){
    let url = `https://backsecurity20231116221243.azurewebsites.net/api/User/ProfesionalList?id=${id}`
    return this.httpService.getJson<any>(url);
  }
  public async CompanyList(){
    let url = `https://backsecurity20231116221243.azurewebsites.net/api/Company/GetAllCompany`
    return this.httpService.getJson<any>(url);
  }
  public async ContractList(){
    let url = `https://backsecurity20231116221243.azurewebsites.net/api/User/GetTipoContrato`
    return this.httpService.getJson<any>(url);
  }
  public async NationalityList(){
    let url = `https://backsecurity20231116221243.azurewebsites.net/api/User/GetPaises`
    return this.httpService.getJson<any>(url);
  }
  public async FunctionList(){
    let url = `https://backsecurity20231116221243.azurewebsites.net/api/User/ListFunction`
    return this.httpService.getJson<any>(url);
  }
  public async GetUserById(id){
    let url = `https://backsecurity20231116221243.azurewebsites.net/api/User/List`
    return this.httpService.getJson<any>(url);
  }
  public async GetUser(user){
    let url = `https://backsecurity20231116221243.azurewebsites.net/api/User/GetWorkerInfo?UserName=${user}`
    return this.httpService.getJson<any>(url);
  }
  public async UserCreate(data:any){
    let url = `https://backsecurity20231116221243.azurewebsites.net/api/User/Create`
    return this.httpService.postJson<any>(url,data);
  }
  public async UserUpdate(data:any){
    let url = `https://backsecurity20231116221243.azurewebsites.net/api/User/Update`
    return this.httpService.putJson<any>(url,data);
  }
  public async UserDisable(data:any){
    let url = `https://backsecurity20231116221243.azurewebsites.net/api/User/Disable`
    return this.httpService.putJson<any>(url,data);
  }
  public async GetJobByCompany(id) {
    let url = `https://backsecurity20231116221243.azurewebsites.net/api/Accidentes/GetJobByCompany?id=${id}`
    return this.httpService.getJson<any>(url);
  }
  public async GetTrabajadoresByCompany(id) {
    let url = `https://backsecurity20231116221243.azurewebsites.net/api/User/TrabajadoresList?id=${id}`
    return this.httpService.getJson<any>(url);
  }
}
