import { Component, Directive, ElementRef, HostListener, OnInit } from "@angular/core";
import { MenuItem } from 'primeng/api';
import { MenuService } from "@core/menu/menu.service";


@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.scss"],
})

export class SidebarComponent implements OnInit {

  menuArray;
  items: MenuItem[];
  selectedItem = "0";

  constructor(public menuservice: MenuService, public myElement: ElementRef) {
  }

  ngOnInit() {
    this.items = [
      { label: 'New', icon: 'pi pi-fw pi-plus' },
      { label: 'Open', icon: 'pi pi-fw pi-download' },
      { label: 'Undo', icon: 'pi pi-fw pi-refresh' }
    ];

    const Dashboard = [
      {
        text: 'Actividades',
        link: '',
        icon: '../../../assets/Icon/helmet-safety-solid.svg'
      },
      {
      text: 'Usuarios',
      link: '/Usuarios',
      icon: 'pi-users'
    }
    ,{
      text: 'Vistas',
      link: '',
      icon: 'pi-send'
    }
    ,{
      text: 'Empresa',
      link: '',
      icon: 'pi-user'
    },{
      text: 'Usuario',
      link: '',
      icon: 'pi-user'
    },
    {
      text: 'Notificaciones',
      link: '',
      icon: 'pi-user'
    },
    {
      text: 'Accidentes',
      link: '',
      icon: 'pi-user'
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
