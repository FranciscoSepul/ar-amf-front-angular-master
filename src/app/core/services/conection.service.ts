import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { CookieService } from "ngx-cookie-service";

@Injectable({
  providedIn: "root"
})

export class ConectionService{
  constructor(private http: HttpClient, private cookies: CookieService) {}

  post(url: string, body: any): Observable<any>{
    return this.http.post<any>(url, body);
  }

  get(url: string, body: any): Observable<any>{
    return this.http.get(url, body);
  }

  put(url: string, body: any): Observable<any>{
    return this.http.put(url, body);
  }

  delete(url: string, body: any): Observable<any>{
    return this.http.delete(url, body);
  }
}
