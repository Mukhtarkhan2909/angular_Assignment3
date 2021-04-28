import { Injectable } from '@angular/core';
import {AdminDetail} from './adminDetails';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor() { }
  admin: AdminDetail = {
    username: 'admin',
    password: 'admin',
    logged: false
  };

  getAdmin(): AdminDetail {
    return this.admin;
  }
  login(): void {
    this.admin.logged = true;
  }
  logout(): void {
    this.admin.logged = false;
  }
}
