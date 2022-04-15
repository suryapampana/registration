import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatSliderModule } from '@angular/material/slider';
import {MatIconModule} from '@angular/material/icon';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ForgotUseridComponent } from './forgot-userid/forgot-userid.component';
import { CdpEmployeeComponent } from './cdp-employee/cdp-employee.component';
import { CdpLeaderComponent } from './cdp-leader/cdp-leader.component';
import { BasicAuthHttpInterceptorService } from './registrationService/basic-auth-http-interceptor.service';
import {MatSnackBarModule} from '@angular/material/snack-bar'
import { NgxUiLoaderModule, NgxUiLoaderHttpModule, SPINNER } from "ngx-ui-loader";
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { CookieService } from 'ngx-cookie-service';
import {MatMenuModule} from '@angular/material/menu'
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    HomeComponent,
    ForgotPasswordComponent,
    ForgotUseridComponent,
    CdpEmployeeComponent,
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
    MatToolbarModule,
    MatSnackBarModule,
    MatMenuModule,
    NgxUiLoaderModule.forRoot({
      fgsType: SPINNER.threeStrings
    }),
    NgxUiLoaderHttpModule.forRoot({
      showForeground:true,
      
    }),
  
  

  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS, useClass:BasicAuthHttpInterceptorService, multi:true
    },{ provide: LocationStrategy, useClass: HashLocationStrategy },[CookieService],
  ],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
