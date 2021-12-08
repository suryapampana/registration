import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee/employee';
import { NgForm, FormGroup } from '@angular/forms';
import { RegistrationService } from '../registrationService/registration.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  employee = new Employee();
  msg = '';
  userId = '';
  

  constructor(private _service : RegistrationService, private _router: Router) { }

  ngOnInit(): void {
    if(localStorage.getItem('userId')){
    this.userId = localStorage.getItem('userId')!;
    console.log(this.userId , localStorage.getItem('userId'));
    }
  }

  registerEmployee(){
    this._service.registerEmployeeFromRemote(this.employee).subscribe(
      
      data =>{
        console.log("Response Recieved");
        localStorage.clear();
        alert("password saved successfully..! you can signin now") ;
        this._router.navigate(['/login'])
      },
      error =>{
        console.log("Exception Occured");
       alert ("Check Details Again");
      }
    )

  }
  

}
