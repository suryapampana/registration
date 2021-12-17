import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { RegistrationService } from './registrationService/registration.service';

@Injectable({
  providedIn: 'root'
})
export class CanactivateGuard implements CanActivate {
  constructor(public _router: Router, public _service: RegistrationService){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree
    {
    if( this._service.isUserLoggedIn()){
      return true;
    }
    alert("Please enter credentials to login")
    this._router.navigate(["/login"])
    return false; 
    }

}

/*  if(localStorage.getItem("userId") == null && localStorage.getItem("token") == null){
         alert("Please enter credentials to login")
         this._router.navigate(["/login"])
       return false;
     } 
     
    return true;  */