import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
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
  forgotUserIdForm: FormGroup;
  
  constructor(private _service: RegistrationService, private _router: Router, private snackBar: MatSnackBar, private builder: FormBuilder) { }
  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
       duration: 2000,
    });
 } 

  ngOnInit(): void {
    this.forgotUserIdForm = this.builder.group({
      employeeid: new FormControl(null, [Validators.required, Validators.minLength(3)]),
    })
  }
  get employeeid() {
    return this.forgotUserIdForm.get('userid');
  }
  sendUserId(){
      this._service.forgotUserIdFromRemote(this.employee).subscribe(
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
        }},
        
        (error)=>{
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

