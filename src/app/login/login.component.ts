
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Employee } from '../employee/employee';
import { RegistrationService } from '../registrationService/registration.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  employee = new Employee();
  msg = '';

  constructor(private _service : RegistrationService, private _router : Router) { }

  ngOnInit(): void {
  }

  loginEmployee(){
    this._service.loginEmployeeFromRemote(this.employee).subscribe(
      data => {
        console.log("response recieved");
        this._router.navigate(['/home']) 
      },
      error=>{
        console.log("exception occured");
        this.msg="Ivalid Credentials, Please enter valid Credentials";
      }

    )

  }

  gotoregistration(){
    this._router.navigate(['/registration'])
  }

}
