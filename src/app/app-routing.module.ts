import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { CanactivateGuard } from './canactivate.guard';


const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:"home", component:HomeComponent, canActivate:[CanactivateGuard]},
  {path:"registration", component:RegistrationComponent},
  {path:"login", component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
