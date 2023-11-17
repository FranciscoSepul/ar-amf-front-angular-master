import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { CookieService } from "ngx-cookie-service";
import { ConectionService } from "@core/services/conection.service";

@Injectable({
  providedIn: "root"
})
export class UsersService {
  constructor(private http: HttpClient, private cookies: CookieService, private conection: ConectionService) {}

  login(user: any): Observable<any> {
    return this.conection.post("https://reqres.in/api/login", user);
  }
  setToken(token: string) {
    this.cookies.set("token", token);
  }

  deleteToken() {
    this.cookies.delete("token");
  }

  getUser() {
    return this.conection.get("https://reqres.in/api/users/2", {});
  }
}
