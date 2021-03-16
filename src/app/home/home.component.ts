import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {UserDetail} from '../services/userDetails';
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @Input() users!: UserDetail;
  user!: UserDetail;
  @Output() newEvent = new EventEmitter<UserDetail>();
  loggedUser = this.userService.getUser();
  logOut(): void {
    this.userService.delete();
    this.newEvent.emit(this.user);
  }
  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

}
