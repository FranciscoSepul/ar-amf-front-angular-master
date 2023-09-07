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
  public async UserUpdate(id:any,data:any){
    let url = `http://localhost:5006/api/User/List`
    return this.httpService.putJson<any>(url,data);
  }
}
