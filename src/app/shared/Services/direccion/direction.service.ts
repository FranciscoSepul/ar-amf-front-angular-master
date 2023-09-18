import { Injectable } from '@angular/core';
import { HttpService } from '../Service/http.service';

@Injectable({
  providedIn: 'root'
})
export class DirectionService {

  constructor(private httpService: HttpService) { }

  public async RegionList(){
    let url = `http://localhost:5006/api/Direccion/GetAllRegion`
    return this.httpService.getJson<any>(url);
  }
 
  public async GetComunaByRegion(id){
    let url = `http://localhost:5006/api/Direccion/GetComunaByRegion?id=${id}`
    return this.httpService.getJson<any>(url);
  }
}
