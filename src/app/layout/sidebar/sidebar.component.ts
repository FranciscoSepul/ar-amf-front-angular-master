import { Component, Directive, ElementRef, HostListener, OnInit } from "@angular/core";
import { MenuItem } from 'primeng/api';
import { MenuService } from "@core/menu/menu.service";
import { UserServiceService } from '../../shared/Services/Usuarios/user-service.service';

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.scss"],
})

export class SidebarComponent implements OnInit {

  menuArray;
  items: MenuItem[];
  selectedItem = "0";
  Usuarios="";

  constructor(public menuservice: MenuService, public myElement: ElementRef, private userServiceService: UserServiceService) {
  }

  ngOnInit() {
    this.Usuarios = sessionStorage.getItem('IdTipoCuenta');
    this.items = [
      { label: 'New', icon: 'pi pi-fw pi-plus' },
      { label: 'Open', icon: 'pi pi-fw pi-download' },
      { label: 'Undo', icon: 'pi pi-fw pi-refresh' }
    ];

    const Dashboard = [
      {
        text: 'Actividades',
        link: '',
        icon: 'helmet-safety-solid.svg',
        user: 1
      },
      {
        text: 'Usuarios',
        link: '/Usuarios',
        icon: 'users-solid.svg',
        user: ((this.Usuarios == "1") ? 1 : 2),
      }
      , {
        text: 'Visitas',
        link: '',
        icon: 'business-time-solid.svg',
        user: 1
      }
      , {
        text: 'Empresa',
        link: '',
        icon: 'building-solid.svg',
        user: 1
      }, {
        text: 'Usuario',
        link: '',
        icon: 'user-solid.svg',
        user: 1
      },
      {
        text: 'Notificaciones',
        link: '',
        icon: 'bell-regular.svg',
        user: 1
      },
      {
        text: 'Accidentes',
        link: '',
        icon: 'person-falling-burst-solid.svg',
        user: 1
      },
    ];
    this.menuservice.addMenu(Dashboard);
    this.menuArray = this.menuservice.getMenu();
  }

  @HostListener('click', ['$event.target']) onClick(e) {
    var content = e.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  }

}
