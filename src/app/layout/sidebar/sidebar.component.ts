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
  Usuario;
  constructor(public menuservice: MenuService, public myElement: ElementRef, private userServiceService: UserServiceService) {
  }

  ngOnInit() {
    this.getUser();
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
        user: ((this.Usuario == 1 || this.Usuario == 2 || this.Usuario == 3) ? 1 : 2)
      },
      {
        text: 'Usuarios',
        link: '/Usuarios',
        icon: 'users-solid.svg',
        user: ((this.Usuario == 1) ? 1 : 2)
      }
      , {
        text: 'Visitas',
        link: '',
        icon: 'business-time-solid.svg',
        user: this.Usuario
      }
      , {
        text: 'Empresa',
        link: '',
        icon: 'building-solid.svg',
        user: this.Usuario
      }, {
        text: 'Usuario',
        link: '',
        icon: 'user-solid.svg',
        user: this.Usuario,
      },
      {
        text: 'Notificaciones',
        link: '',
        icon: 'bell-regular.svg',
        user: this.Usuario
      },
      {
        text: 'Accidentes',
        link: '',
        icon: 'person-falling-burst-solid.svg',
        user: this.Usuario
      },
    ];
    const x = Dashboard.find(x => x.user==1);

    this.menuservice.addMenu(Dashboard);
    this.menuArray = this.menuservice.getMenu();

  }
  async getUser() {
    let user = sessionStorage.getItem('User');
    (await this.userServiceService.GetUser(user)).subscribe(async (data) => {
      this.Usuario = data?.idtipocuenta;
      console.log('tp ' + data.idtipocuenta);
    });
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
