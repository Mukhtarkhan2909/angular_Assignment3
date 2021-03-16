import { Component, OnInit } from '@angular/core';
import { UserDetail} from '../services/userDetails';
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  user: UserDetail = this.userService.getUser();
  addUser(newUser: UserDetail): void {
    this.user = newUser;
  }
  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

}
