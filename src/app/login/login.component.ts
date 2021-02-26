import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {UserDetail} from '../layout/userDetails';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  logged = false;
  user!: UserDetail;

  @Output() newEvent = new EventEmitter<UserDetail>();
  userEvent(email: string, password: string): void {
    this.user = {
      email,
      password,
      logged: !this.logged
    };
    this.newEvent.emit(this.user);
  }
  constructor() { }
  ngOnInit(): void {
  }
}
