import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';
import { environment } from '../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class Helpers {

    static APPLICATION_JSON = 'application/json';

    static readonly CONTENT_TYPE: string = 'Content-Type';
    static readonly APPLICATION_JSON_UTF8: string = 'application/json; charset=utf-8';
    static readonly APPLICATION_X_WWW_FORM_URLENCODED: string = 'application/x-www-form-urlencoded';

    getBasicEndPoint(path: string): string {
        return `${environment.developerURL}${path}`;
    }

    formatDate(date: Date): string {
        const newDate = new Date(date);
        const D = newDate.getDate();
        const M = newDate.getMonth() + 1;
        const Y = newDate.getFullYear();
        const h = newDate.getHours();
        const m = newDate.getMinutes();
        const s = newDate.getSeconds();
        let format = D < 10 ? '0' + D : "" + D;
        format += "-" + (M < 10 ? '0' + M : M);
        format += "-" + Y;
        format += h == 0 && m == 0 && s == 0 ? '' : (" / " + (h < 10 ? '0' + h : h));
        format += h == 0 && m == 0 && s == 0 ? '' : (":" + (m < 10 ? '0' + m : m));
        format += h == 0 && m == 0 && s == 0 ? '' : (":" + (s < 10 ? '0' + s : s));
        return format
    }

    noAutorizado(messageService: MessageService) {
        this.CreateMessage(messageService, 'error', 'Advertencia', 'No cuenta con el permiso necesario')
    }

    sinResultado(messageService: MessageService) {
        this.CreateMessage(messageService, 'info', 'Información', 'No existen resultados')
    }

    CreateMessage(messageService: MessageService, severity: string, summary: string, detail: string) {
        messageService.add({ severity: severity, summary: summary, detail: detail });
    }

    checkPermission(messageService: MessageService,e: { status: number; }) {
        if (e.status == 401 || e.status == 403){
            this.noAutorizado(messageService);
            return false
        }
        return true;
    }
}
