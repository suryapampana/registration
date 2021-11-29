import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { CanactivateGuard } from './canactivate.guard';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ForgotUseridComponent } from './forgot-userid/forgot-userid.component';


const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:"home", component:HomeComponent, canActivate:[CanactivateGuard]},
  {path:"registration", component:RegistrationComponent,canActivate:[CanactivateGuard]},
  {path:"login", component:LoginComponent},
  {path:"forgotpassword", component:ForgotPasswordComponent},
  {path:"forgotuserid", component:ForgotUseridComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
