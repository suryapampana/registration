import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { RegistrationService } from './registrationService/registration.service';

@Injectable({
  providedIn: 'root'
})
export class CanactivateGuard implements CanActivate {
  url: any;
  constructor(public _router: Router, public _service: RegistrationService, private snackBar: MatSnackBar){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree
    {
    if( this._service.isUserLoggedIn()){
      return true;
    }
    this.snackBar.open("Please enter credentials to login", "close",{
      duration: 3000,
      verticalPosition: 'top',
   });
    
    this.url = new URL("http://apacworld.in.capgemini.com:9090/APACWorld");
    window.location.href=this.url;
    /* alert("Please enter credentials to login") */
    /* this._router.navigate(["/login"]) */
    return false; 
    }

}

/*  if(localStorage.getItem("userId") == null && localStorage.getItem("token") == null){
         alert("Please enter credentials to login")
         this._router.navigate(["/login"])
       return false;
     } 
     
    return true;  */