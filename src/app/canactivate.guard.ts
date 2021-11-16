import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CanactivateGuard implements CanActivate {
  constructor(public _router: Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree
    {
      if(localStorage.getItem("userId")== null && localStorage.getItem("password")== null){
         alert("Please enter credentials to login")
         this._router.navigate(["/login"])
       return false;
     } 
     
    return true; 
  
}
}
