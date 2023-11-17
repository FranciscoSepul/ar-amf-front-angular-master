import { Injectable } from '@angular/core';
import { HttpService } from '../Service/http.service';

@Injectable({
  providedIn: 'root'
})
export class DirectionService {

  constructor(private httpService: HttpService) { }

  public async RegionList() {
    let url = `https://backsecurity20231116221243.azurewebsites.net/api/Direccion/GetAllRegion`
    return this.httpService.getJson<any>(url);
  }
  public async Meses() {
    let url = `https://backsecurity20231116221243.azurewebsites.net/api/Direccion/GetAllMeses`
    return this.httpService.getJson<any>(url);
  }

  public async GetComunaByRegion(id) {
    let url = `https://backsecurity20231116221243.azurewebsites.net/api/Direccion/GetComunaByRegion?id=${id}`
    return this.httpService.getJson<any>(url);
  }
 
}
