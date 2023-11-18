import { Component, OnInit } from '@angular/core';
import { UsersService } from '@core/services/users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public userService: UsersService) { }

  ngOnInit(): void {
  }

  getUserLogged() {
    this.userService.getUser().subscribe(user => {
    });
  }


}
