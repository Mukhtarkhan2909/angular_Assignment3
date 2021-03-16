import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {UserDetail} from '../services/userDetails';
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private userService: UserService) { }
  logged = false;
  password = '';
  email = '';
  user!: UserDetail;
  @Output() newEvent = new EventEmitter<UserDetail>();
  ngOnInit(): void {
  }
  userEvent(e: string, p: string): void {
    this.user = {
      email: e,
      password: p,
      logged: true
    };
    this.userService.add(this.user);
    this.newEvent.emit(this.user);
  }
}
