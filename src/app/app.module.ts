import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatSliderModule } from '@angular/material/slider';
import {MatIconModule} from '@angular/material/icon';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ForgotUseridComponent } from './forgot-userid/forgot-userid.component';
import { CdpEmployeeComponent } from './cdp-employee/cdp-employee.component';
import { CdpManagerComponent } from './cdp-manager/cdp-manager.component';
import { CdpLeaderComponent } from './cdp-leader/cdp-leader.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    HomeComponent,
    NavbarComponent,
    ForgotPasswordComponent,
    ForgotUseridComponent,
    CdpEmployeeComponent,
    CdpManagerComponent,
    CdpLeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    NgbModule,
    MatSliderModule,
    MatIconModule,
    MatToolbarModule
  
  

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
