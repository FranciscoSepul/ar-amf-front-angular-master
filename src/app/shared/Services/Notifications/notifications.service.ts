import { Injectable } from '@angular/core';
import { HttpService } from '../Service/http.service';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  constructor(private httpService: HttpService) { }

  public async List(){
    let url = `http://localhost:5006/api/Notificaciones/GetAllNotification`
    return this.httpService.getJson<any>(url);
  }
  
}
