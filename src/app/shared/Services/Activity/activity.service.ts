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
}
