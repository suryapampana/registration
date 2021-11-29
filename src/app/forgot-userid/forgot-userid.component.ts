import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee/employee';
import { RegistrationService } from '../registrationService/registration.service';

@Component({
  selector: 'app-forgot-userid',
  templateUrl: './forgot-userid.component.html',
  styleUrls: ['./forgot-userid.component.css']
})
export class ForgotUseridComponent implements OnInit {
  employee = new Employee();
  msg = '';
  
  constructor(private _service: RegistrationService, private _router: Router) { }

  ngOnInit(): void {
  }
  sendUserId(){
    
  }

}
