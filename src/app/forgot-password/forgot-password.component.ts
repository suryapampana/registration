import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Employee } from '../employee/employee';
import { RegistrationService } from '../registrationService/registration.service';


@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  employee = new Employee();
  msg = '';
  

  constructor(private _service: RegistrationService, private _router: Router) { }

  ngOnInit(): void {
  }

  

  sendPassword(){
    this._service.forgotPasswordFromRemote(this.employee).subscribe(
      data=>{
        console.log("Mail Sent Successfull");
        localStorage.clear();
        alert("Email sent successfully.. check your inbox");
        this._router.navigate(['/login'])
      },
      
      error=>{
        console.log(error);
        alert("check details again");
      }
      );
  }
}

