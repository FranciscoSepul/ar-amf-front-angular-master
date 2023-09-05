import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Helpers } from '../../helpers/helpers';

@Injectable({
    providedIn: 'root'
})
export class HttpService {

    static readonly CONTENT_TYPE: string = 'Content-Type';
    static readonly APPLICATION_JSON_UTF8: string = 'application/json; charset=utf-8';
    static readonly APPLICATION_X_WWW_FORM_URLENCODED: string = 'application/x-www-form-urlencoded';
    static readonly APPLICATION_ACCEPT: string = 'Accept';

    constructor(private readonly http: HttpClient) {
    }
    token = localStorage.getItem("token");

    public postMultipartFormForJson<T>(url: string, formData: FormData | null, blockui = false): Observable<T> {
        const headersAux = new HttpHeaders;
        return this.http.post<T>(url, formData ? formData : null, {
            headers: headersAux,
            responseType: 'json',
            params: { blockui: blockui.toString() }
        });
    }

    public postFormForJson<T>(url: string, body: URLSearchParams | null, blockui = false): Observable<T> {
        let headersAux = new HttpHeaders();
        headersAux = headersAux.set(HttpService.CONTENT_TYPE, HttpService.APPLICATION_X_WWW_FORM_URLENCODED);
        return this.http.post<T>(url, body ? body.toString() : null, {
            headers: headersAux,
            responseType: 'json',
            params: { blockui: blockui.toString() }
        });
    }

    public postFormForText(url: string, body: URLSearchParams | null, blockui = false): Observable<string> {
        let headersAux = new HttpHeaders();
        headersAux = headersAux.set(HttpService.CONTENT_TYPE, HttpService.APPLICATION_X_WWW_FORM_URLENCODED);
        return this.http.post<string>(url, body ? body.toString() : null, {
            headers: headersAux,
            responseType: 'text' as 'json',
            params: { blockui: blockui.toString() }
        });
    }

    public postFormForBlob(url: string, body: URLSearchParams | null, blockui = false): Observable<Blob> {
        let headersAux = new HttpHeaders();
        headersAux = headersAux.set(HttpService.CONTENT_TYPE, HttpService.APPLICATION_X_WWW_FORM_URLENCODED);
        return this.http.post<Blob>(url, body ? body.toString() : null, {
            headers: headersAux,
            responseType: 'blob' as 'json',
            params: { blockui: blockui.toString() }
        });
    }

    public postJson<T>(url: string, body: any | null, blockui = false): Observable<T> {
        let headersAux = new HttpHeaders();
        headersAux = headersAux.set(HttpService.CONTENT_TYPE, HttpService.APPLICATION_JSON_UTF8);
        return this.http.post<T>(url, body, {
            headers: headersAux,
            params: { blockui: blockui.toString() }
        });
    }

    public postJsonForText(url: string, body: any | null, blockui = false): Observable<string> {
        let headersAux = new HttpHeaders();
        headersAux = headersAux.set(HttpService.CONTENT_TYPE, HttpService.APPLICATION_JSON_UTF8);
        return this.http.post<string>(url, body, {
            headers: headersAux,
            responseType: 'text' as 'json',
            params: { blockui: blockui.toString() }
        });
    }

    public getJson<T>(url: string, blockui = false): Observable<T> {
        let headersAux = new HttpHeaders()
            .set(HttpService.CONTENT_TYPE, HttpService.APPLICATION_JSON_UTF8);
        return this.http.get<T>(url, { headers: headersAux, responseType: 'json', params: { blockui: blockui.toString() } });
    }
    public get(endPoint: string, blockui = false) {
        let headersAux = new HttpHeaders()
        .set('Authorization', `Bearer ${this.token}`)
        .set(Helpers.CONTENT_TYPE, Helpers.APPLICATION_JSON_UTF8);
        return this.http.get(endPoint, { headers: headersAux, responseType: 'json', params: { blockui: blockui.toString() } });
    }

    public getJsonWithouParams<T>(url: string, _blockui = false): Observable<T> {
        let headersAux = new HttpHeaders()
            .set(HttpService.CONTENT_TYPE, HttpService.APPLICATION_JSON_UTF8);
        return this.http.get<T>(url, { headers: headersAux, responseType: 'json' });
    }

    public getXlsx(url: string) {
        let headersAux = new HttpHeaders()
            .set(HttpService.CONTENT_TYPE, HttpService.APPLICATION_X_WWW_FORM_URLENCODED)
            .set(HttpService.APPLICATION_ACCEPT, '*/*')
        return this.http.get(url, { headers: headersAux, responseType: 'blob' });
    }

    public delete<T>(url: string, blockui = false): Observable<T> {
        let headersAux = new HttpHeaders();
        headersAux = headersAux.set(HttpService.CONTENT_TYPE, HttpService.APPLICATION_JSON_UTF8);
        return this.http.delete<T>(url, { headers: headersAux, responseType: 'json', params: { blockui: blockui.toString() } });
    }

    public putJson<T>(url: string, body: any | null, blockui = false): Observable<T> {
        let headersAux = new HttpHeaders();
        headersAux = headersAux.set(HttpService.CONTENT_TYPE, HttpService.APPLICATION_JSON_UTF8);
        return this.http.put<T>(url, body, {
            headers: headersAux,
            params: { blockui: blockui.toString() }
        });
    }

}
