import { Component, OnInit } from '@angular/core';
import {UserDetail} from './userDetails';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  user!: UserDetail;
  addUser(newUser: UserDetail): void {
    this.user = newUser;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
