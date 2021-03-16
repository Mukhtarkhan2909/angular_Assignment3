import { Injectable } from '@angular/core';
import { UserDetail } from './userDetails';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
  user: UserDetail = {
    email: '',
    password: '',
    logged: false
  };

  getUser(): UserDetail {
    return this.user;
  }
  add(user: UserDetail): void {
    this.user = user;
  }
  delete(): void {
    this.user.logged = false;
  }
}
