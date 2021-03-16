import { Component, OnInit } from '@angular/core';
import {BasketdevicesService} from '../services/basketdevices.service';
import {UserDetail} from '../services/userDetails';
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {

  user: UserDetail = this.userService.getUser();
  constructor(private userService: UserService, public basketDevicesService: BasketdevicesService) { }

  ngOnInit(): void {
  }

}
