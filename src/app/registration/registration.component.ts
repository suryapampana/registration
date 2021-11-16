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
  

  constructor(private _service : RegistrationService, private _router: Router) { }

  ngOnInit(): void {
  }

  registerEmployee(){
    this._service.registerEmployeeFromRemote(this.employee).subscribe(
      data =>{
        console.log("Response Recieved");
        alert("Employee Registered") ;
      },
      error =>{
        console.log("Exception Occured");
       alert ("UserId " +this.employee.userId+ " already exists");
      }
    )

  }
  

}
