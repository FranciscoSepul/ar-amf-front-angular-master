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
import { UtilsModule } from './modules/utils/utils.module';
import { LoginComponent } from '../app/modules/login/login.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatCardModule} from '@angular/material/card';
import { ImageModule } from 'primeng/image';

@NgModule({
    declarations:
    [AppComponent,
     LoginComponent
    ],
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
        UtilsModule,
        MatFormFieldModule,
        MatProgressSpinnerModule,
        MatCardModule,
        ImageModule
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
