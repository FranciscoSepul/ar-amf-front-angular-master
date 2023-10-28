import { Injectable } from '@angular/core';
import { HttpService } from '../Service/http.service';

@Injectable({
  providedIn: 'root'
})
export class AccidentsService {

  constructor(private httpService: HttpService) { }

  public async List(){
    let url = `http://localhost:5006/api/Accidentes/GetAllAccidents`
    return this.httpService.getJson<any>(url);
  }
  public async GetAccidentById(id) {
    let url = `http://localhost:5006/api/Accidentes/AccidentById?id=${id}`
    return this.httpService.getJson<any>(url);
  }

}
