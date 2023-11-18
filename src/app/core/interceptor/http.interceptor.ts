import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpResponse, HttpErrorResponse, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { map, finalize, catchError } from 'rxjs/operators';
import { SpinnerService } from '../spinner/spinner.service';
import { CookieService } from "ngx-cookie-service";

@Injectable()
export class CustomHttpInterceptor implements HttpInterceptor {
    private cantReq: number;

    constructor(private spinnerService: SpinnerService, private cookies: CookieService) {
        this.cantReq = 0;
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.cantReq++;
        this.spinnerService.show();
        const token = this.cookies.get("token");

        if (!token) {
          return next.handle(req);
        }

        const headers = req.clone({
          headers: req.headers.set('Authorization', `Bearer ${token}`)
        });

        return next.handle(req).pipe(
            finalize(() => {
                this.cantReq--;
                if(this.cantReq === 0)
                    this.spinnerService.hide()
            })
        );
    }
}
