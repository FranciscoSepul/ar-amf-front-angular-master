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

    const Dashboard = [{
      text: 'Test1',
      link: '/Test1',
      icon: 'pi-check',
      submenu: [
        {
          text: 'SubmenuTest1',
          link: '/Test1/SubmenuTest1'
        },
        {
          text: 'SubmenuTest2',
          link: '/Test1/SubmenuTest2'
        },
        {
          text: 'SubmenuTest3',
          link: '/Test2/SubmenuTest3'
        }
      ]
    }, {
      text: 'Test2',
      link: '/Test2',
      icon: 'pi-send',
      submenu: [
        {
          text: 'SubmenuTest4',
          link: '/Test2/SubmenuTest4'
        },
        {
          text: 'SubmenuTest5',
          link: '/Test2/SubmenuTest5'
        },
        {
          text: 'SubmenuTest6',
          link: '/Test2/SubmenuTest6'
        },
        {
          text: 'SubmenuTest7',
          link: '/Test2/SubmenuTest7'
        },
        {
          text: 'SubmenuTest8',
          link: '/Test2/SubmenuTest8'
        }
      ]
    }, {
      text: 'Test3',
      link: '/Test3',
      icon: 'pi-user'
    }
    ];

    this.menuservice.addMenu(Dashboard);
    this.menuArray = this.menuservice.getMenu();
    //console.log(this.menuservice.getMenu());

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
