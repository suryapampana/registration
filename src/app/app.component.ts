import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from './registrationService/registration.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'registration';

  constructor(public _service: RegistrationService, public _router: Router){}

   ngOnInit():boolean {
    if(this._service.autoLogout())
    {
      return true
    }
    alert("Session expired please login again");
    this._router.navigate(['/login']);
    localStorage.clear();
    return false;
    }

  }




