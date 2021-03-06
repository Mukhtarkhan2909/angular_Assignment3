import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutComponent } from './layout/layout.component';
import { RegistrationComponent } from './registration/registration.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { DevicesComponent } from './devices/devices.component';
import { LoginComponent } from './login/login.component';
import { MacComponent } from './devices/mac/mac.component';
import { WatchComponent } from './devices/watch/watch.component';
import {IphoneComponent} from './devices/iphone/iphone.component';

const routes: Routes = [
  {path: 'welcome', component: WelcomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'registration', component: RegistrationComponent},
  {path: 'login', component: LoginComponent},
  {path: 'devices', component: DevicesComponent,
    children: [
      {path: 'mac', component: MacComponent},
      {path: 'iphone', component: IphoneComponent},
      {path: 'watch', component: WatchComponent}
    ]},
  {path: 'layout', component: LayoutComponent},
  {path: '', redirectTo: 'welcome', pathMatch: 'full'},
  {path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
