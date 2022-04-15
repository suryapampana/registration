import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm, Validators, FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Employee } from '../employee/employee';
import { RegistrationService } from '../registrationService/registration.service';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  employee = new Employee();
  msg = '';
  loginForm: FormGroup;

  /* isLoggedin = false;
  isLoginFailed = false; */

  constructor(private _service: RegistrationService, private _router: Router, private snackBar: MatSnackBar, private builder: FormBuilder) {}
  
  ngOnInit(): void {
    this.loginForm = this.builder.group({
      userid: new FormControl(null, [Validators.required, Validators.minLength(3)]),
     password: [
      '',
      [
        Validators.required
       ]
    ]
    });
    
  }

  loginEmployee(): void {
    this._service.loginEmployeeFromRemote(this.employee).subscribe(
      (data) => {
        /*  this.isLoggedin = false; */
        this.getUserData();
      },
      (error) => {
        console.log('Invalid Credentials');
        /* this.msg = 'Invalid Credentials, Please check once'; */
        this.snackBar.open(error, "close",{
          duration: 3000,
          verticalPosition: 'top',
          panelClass: ['danger'], 
       });
       /*  alert(this.msg) */
        /*   this.isLoggedin = false;
        this.isLoginFailed = true; */
      }
    );
  }

  get password() {
    return this.loginForm.get('password');
  }

  get userid() {
    return this.loginForm.get('userid');
  }

  getUserData(): void {
    this._service
      .getUserByUserIdFromRemote(this.employee)
      .subscribe((userdata) => {
        if (userdata.registerIndicationFlag === 0) {
          console.log(' Set New Credentials');
          this.snackBar.open("Set New Credentials", "close",{
            duration: 3000,
            verticalPosition: 'top',
            panelClass: ['success'], 
         });
          this._router.navigate(['/registration']);
        } else if (userdata.registerIndicationFlag === 1) {
          console.log('Loggedin Successfully');
          this.snackBar.open("SignIn Successfully", "close",{
            duration: 3000,
            verticalPosition: 'top',
            panelClass: ['success'], 
         });
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
