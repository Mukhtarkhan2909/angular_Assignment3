import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { ErrorComponent } from './error/error.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { DevicesComponent } from './devices/devices.component';
import { MacComponent } from './devices/mac/mac.component';
import { IphoneComponent } from './devices/iphone/iphone.component';
import { WatchComponent } from './devices/watch/watch.component';
import { CustomPipePipe } from './pipes/custom-pipe.pipe';
import { BasketComponent } from './basket/basket.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LayoutComponent,
    LoginComponent,
    RegistrationComponent,
    HomeComponent,
    ErrorComponent,
    WelcomeComponent,
    DevicesComponent,
    MacComponent,
    IphoneComponent,
    WatchComponent,
    CustomPipePipe,
    BasketComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
