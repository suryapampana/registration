import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
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
  forgotPasswordForm: FormGroup;
  

  constructor(private _service: RegistrationService, private _router: Router, private snackBar: MatSnackBar, private builder: FormBuilder) { }

  ngOnInit(): void {
    this.forgotPasswordForm = this.builder.group({
      userid: [
        '',
        [
          Validators.required,
          Validators.pattern('[A-Za-z].{4,}'),
         ]
      ]
    })
  }

  get userid() {
    return this.forgotPasswordForm.get('userid');
  }
  

  sendPassword(){
    this._service.forgotPasswordFromRemote(this.employee).subscribe(
      data=>{
        if(data == null || data == undefined){
          console.log("Mail not Sent");
          localStorage.clear();
          this.snackBar.open("Email not sent... Try Again", "close",{
            duration: 3000,
            verticalPosition: 'top',
            panelClass: ['danger'], 
         });
          this._router.navigate(['/login'])
        }else{
        console.log("Mail Sent Successfull");
        localStorage.clear();
        this.snackBar.open("Email sent successfully.. check your inbox", "close",{
          duration: 3000,
          verticalPosition: 'top',
          panelClass: ['success'], 
       });
        this._router.navigate(['/login'])
      }
      },
      
      (error) =>{
        console.log(error.error.message);
        this.snackBar.open(error.error.message, "close",{
          duration: 3000,
          verticalPosition: 'top',
          panelClass: ['danger'], 
       });
      }
      );
  }
}

