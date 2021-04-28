import { Component, OnInit } from '@angular/core';
import {AdminDetail} from '../services/adminDetails';
import {AdminService} from '../services/admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  admin: AdminDetail = this.adminService.getAdmin();
  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
  }

}
