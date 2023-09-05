import { NgModule } from "@angular/core";

import { LayoutComponent } from "./layout.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { HeaderComponent } from "./header/header.component";
import { OffsidebarComponent } from "./offsidebar/offsidebar.component";
import { FooterComponent } from "./footer/footer.component";
import { SharedModule } from "../shared/shared.module";
import { RouterModule } from "@angular/router";
import { MenuService } from "@core/menu/menu.service";
import { BrowserModule } from "@angular/platform-browser";

@NgModule({
  imports: [SharedModule, RouterModule, BrowserModule],
  declarations: [
    LayoutComponent,
    SidebarComponent,
    HeaderComponent,
    OffsidebarComponent,
    FooterComponent,
  ],
  exports: [
    LayoutComponent,

    HeaderComponent,
    OffsidebarComponent,
    FooterComponent
  ],
  providers:[
    MenuService
  ]
})
export class LayoutModule {}
