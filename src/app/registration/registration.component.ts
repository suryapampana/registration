import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee/employee';
import { NgForm, FormGroup, FormBuilder, FormControl, Validators, AbstractControl } from '@angular/forms';
import { RegistrationService } from '../registrationService/registration.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  employee = new Employee();
  msg = '';
  userId = '';
  registrationForm: FormGroup;
  

  constructor(private _service : RegistrationService, private _router: Router, private snackBar: MatSnackBar,private builder: FormBuilder) { }

  ngOnInit(): void {

    this.registrationForm = this.builder.group({
      userid: new FormControl(null, [Validators.required, Validators.minLength(3)]),
     password: [
      '',
      [
        Validators.required,
        Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&#])[A-Za-z\d$@$!%*?&#].{7,}')
       ]
    ],
    confirmpassword: [
      '',
      [
        Validators.required,
        Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&#])[A-Za-z\d$@$!%*?&#].{7,}')
       ]
    ]
    })


    if(localStorage.getItem('userId')){
    this.userId = localStorage.getItem('userId')!;
    this.employee.userId = this.userId;
    }
  }
  onPasswordChange() {
    if (this.confirmpassword?.value == this.password?.value) {
      this.confirmpassword?.setErrors(null);
    } else {
      this.confirmpassword?.setErrors({ mismatch: true });
    }
  }
  
  get userid() {
    return this.registrationForm.get('userid');
  }


get password(): AbstractControl {
  return this.registrationForm.controls['password'];
}

get confirmpassword(): AbstractControl {
  return this.registrationForm.controls['confirmpassword'];
}



  registerEmployee(){

    this._service.registerEmployeeFromRemote(this.employee).subscribe(
      
      data =>{
        console.log("Response Recieved");
        localStorage.clear();
        this.snackBar.open("password changed successfully..! you can signin now", "close",{
          duration: 3000,
          verticalPosition: 'top',
          panelClass: ['success'], 
       });
        /* alert("password saved successfully..! you can signin now") ; */
        this._router.navigate(['/login'])
      },
      error =>{
        console.log("Exception Occured");
        this.snackBar.open(error, "close",{
          duration: 3000,
          verticalPosition: 'top',
          panelClass: ['danger'], 
       });
       /* alert (error); */
      }
    )

  }
  

}



