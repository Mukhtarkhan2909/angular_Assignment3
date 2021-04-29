import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import {AdminComponent} from './admin.component';
import {LoginComponent} from '../login/login.component';
import {AppModule} from '../app.module';
import { ManageDevicesComponent } from './manage-devices/manage-devices.component';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AdminComponent,
    ManageDevicesComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule
  ],
  exports: [
    AdminComponent,
    ManageDevicesComponent
  ]
})
export class AdminModule { }
