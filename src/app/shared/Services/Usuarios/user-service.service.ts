import { Injectable } from '@angular/core';
import { HttpService } from '../Service/http.service';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  list() {
    throw new Error('Method not implemented.');
  }

  constructor(private httpService: HttpService) { }

  public async UserList(){
    let url = `http://localhost:5006/api/User/List`
    return this.httpService.getJson<any>(url);
  }
  public async GetUserById(id){
    let url = `http://localhost:5006/api/User/List`
    return this.httpService.getJson<any>(url);
  }
}
