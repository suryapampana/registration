import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { RegistrationService } from './registrationService/registration.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'registration';
  url: any;

  constructor(public _service: RegistrationService, public _router: Router, private snackBar: MatSnackBar){}

   ngOnInit():boolean {

    this._service.isUserLoggedIn();
    if(this._service.autoLogout())
    {
      return true
    }
    this.snackBar.open("Session expired please login again", "close",{
      duration: 3000,
      verticalPosition: 'top',
      panelClass: ['danger'], 
   });
    /* alert("Session expired please login again"); */
    this.url = new URL("http://apacworld.in.capgemini.com:9090/APACWorld");
    window.location.href=this.url;
    /* this._router.navigate(['/login']); */
    localStorage.clear();
    return false;
    }

  }




