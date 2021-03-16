import { Component, OnInit } from '@angular/core';
import {UserDetail} from '../services/userDetails';
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.scss']
})
export class DevicesComponent implements OnInit {

  user: UserDetail = this.userService.getUser();
  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

}
