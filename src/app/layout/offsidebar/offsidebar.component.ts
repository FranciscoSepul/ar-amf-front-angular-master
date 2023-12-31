import { Component, OnInit, OnDestroy, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '@core/services/users.service';

@Component({
    selector: 'app-offsidebar',
    templateUrl: './offsidebar.component.html',
    styleUrls: ['./offsidebar.component.scss']
})
export class OffsidebarComponent implements OnInit, OnDestroy {

    currentTheme: any;
    selectedLanguage: string;

    constructor(
        public elem: ElementRef,
        public userService: UsersService,
        public router: Router
        ) {
    }

    ngOnInit() {
        this.anyClickClose();
    }

    anyClickClose() {
        document.addEventListener('click', this.checkCloseOffsidebar, false);
    }

    checkCloseOffsidebar = e => {
        const contains = (this.elem.nativeElement !== e.target && this.elem.nativeElement.contains(e.target));
        if (!contains) {
            //this.settings.setLayoutSetting('offsidebarOpen', false);
        }
    }

    ngOnDestroy() {
        document.removeEventListener('click', this.checkCloseOffsidebar);
    }
    logOut(){
      this.userService.deleteToken();
      this.router.navigateByUrl('/login');
    }
}
