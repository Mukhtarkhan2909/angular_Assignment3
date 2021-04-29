import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {AdminDetail} from './adminDetails';
import {state} from '@angular/animations';
import {AdminService} from './admin.service';

@Injectable({
  providedIn: 'root'
})
export class AdminActivateService implements CanActivate{

  admin: AdminDetail = this.adminService.getAdmin();
  constructor(private adminService: AdminService) { }

  canActivate(): boolean {
    if (this.admin.logged) {
      return true;
    }
    return false;
  }
}
