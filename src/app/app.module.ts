import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CoreModule } from "./core/core.module";
import { LayoutModule } from "./layout/layout.module";
import { SharedModule } from "./shared/shared.module";
import { CustomHttpInterceptor } from "./core/interceptor/http.interceptor";
import { NgbdModalConfirm } from "./shared/modals/modal.confirm/modal.confirm";
import { FormsModule } from "@angular/forms";
import { CookieService } from 'ngx-cookie-service';
import { SideMenuItemComponent } from "@shared/components/side-menu-item/side-menu-item.component";
import { ToastModule } from 'primeng/toast';
import { LoginModModule } from "@modules/login-mod/login-mod.module";
import { UtilsModule } from './modules/utils/utils.module';


@NgModule({
    declarations: [AppComponent],
    imports: [
        HttpClientModule,
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        CoreModule,
        LayoutModule,
        SharedModule,
        FormsModule,
        ToastModule,
        LoginModModule,
        UtilsModule,
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: CustomHttpInterceptor,
            multi: true,
        },
        CookieService,
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
