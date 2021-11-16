import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee/employee';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
userId = '';
  
   

  constructor(public _router : Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.userId = (localStorage.getItem('userId')!);
  }
logoutEmployee(){
  localStorage.clear();
  this._router.navigate(["/login"])
  alert("Signout Successfull..!")

}

}