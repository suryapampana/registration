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
  /* isLoggedin = false;
  isLoginFailed = false; */

  constructor(private _service: RegistrationService, private _router: Router) {}

  ngOnInit(): void {}

  loginEmployee(): void {
    this._service.loginEmployeeFromRemote(this.employee).subscribe(
      (data) => {
        /*  this.isLoggedin = false; */
        this.getUserData();
      },
      (error) => {
        console.log('Invalid Credentials');
        this.msg = 'Invalid Credentials, Please check once';
        /*   this.isLoggedin = false;
        this.isLoginFailed = true; */
      }
    );
  }

  getUserData(): void {
    this._service
      .getUserByUserIdFromRemote(this.employee)
      .subscribe((userdata) => {
        if (userdata.registerIndicationFlag === 0) {
          console.log(' Set New Credentials');
          this._router.navigate(['/registration']);
        } else if (userdata.registerIndicationFlag === 1) {
          console.log('Loggedin Successfully');
          this._router.navigate(['/home']);
        }
      });
  }

  /* localStorage.setItem("userId", this.employee.userId);
        localStorage.setItem("Token", data.jwtToken); */

  /* const employeeDetails = data;
      if (employeeDetails[0].registerIndicationFlag === 0) {
        localStorage.setItem('userId', this.employee.userId); */
  /* console.log(' Set New Credentials');
        this._router.navigate(['/registration']); */

  /*  else if(employeeDetails[0].registerIndicationFlag === 1 && employeeDetails[0].role === "Employee"){
        localStorage.setItem('userId', this.employee.userId);
        localStorage.setItem('password', this.employee.password);
        localStorage.setItem('employeeId',(employeeDetails[1].employeeId));
        localStorage.setItem('fullName', employeeDetails[1].fullName);
        localStorage.setItem('gender', employeeDetails[1].gender);
        localStorage.setItem('globalEmployeeId', employeeDetails[1].globalEmployeeId);
        localStorage.setItem('perner', employeeDetails[1].perner);

        console.log("Loggedin Successfully");
        this._router.navigate(['/home']);
      }*/
}
