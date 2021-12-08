import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Employee } from '../employee/employee';
import { RegistrationService } from '../registrationService/registration.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  employee = new Employee();
  msg = '';

  constructor(private _service: RegistrationService, private _router: Router) {}

  ngOnInit(): void {}

  loginEmployee(): void {
    this._service.loginEmployeeFromRemote(this.employee).subscribe((data) => {
      const employeeDetails = data;
      if (employeeDetails[0].registerIndicationFlag === 0) {
        localStorage.setItem('userId', this.employee.userId);
        console.log(' Set New Credentials');
        this._router.navigate(['/registration']);
      } 
      else if(employeeDetails[0].registerIndicationFlag === 1){
        localStorage.setItem('userId', this.employee.userId);
        localStorage.setItem('password', this.employee.password);
        localStorage.setItem('employeeId',JSON.stringify(this.employee.employeeId));
        console.log('response recieved');
        this._router.navigate(['/home']);
      }
      else {
        console.log("Invalid Credentials");
      }
    },
    error=>{
      console.log("Invalid Credentials");
      this.msg="Invalid Credentials, Please check once";
    }
    );
  }
}
