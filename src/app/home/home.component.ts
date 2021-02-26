import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {UserDetail} from '../layout/userDetails';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @Input() users!: UserDetail;
  user!: UserDetail;
  @Output() newEvent = new EventEmitter<UserDetail>();
  logOut(): void {
    this.newEvent.emit(this.user);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
