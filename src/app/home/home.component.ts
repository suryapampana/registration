import { Component, Input, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee/employee';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
userId = '';
fullName = '';
token = '';
url: any
@Input() insideSideNav!: MatSidenav;
  
   

  constructor(public _router : Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.userId = (localStorage.getItem('userId')!);
    this.fullName = (localStorage.getItem('fullName')!);
    this.token = localStorage.getItem('token')!;
    
  }
logoutEmployee(){
  localStorage.clear();
  this._router.navigate(["/login"])
  alert("Signout Successfull..!")

}

 cdpPortal(){
 /* this._router.navigate(['/cdp-employee'], {queryParams: {'userid':this.userId}, skipLocationChange: true}); */
 /* this.url = new URL("https://www.google.com?v="+this.token); */
 /* this.url = new URLSearchParams(['https://www.google.com'],queryParams: {fd: this.token}); */

 this.url = new URL("https://www.codejava.net/frameworks/spring-boot/user-registration-and-login-tutorial?v="+this.token);
 window.location.href=this.url;  
 } 

 /* this._router.navigate([]).then(result=>{window.location.href = 'http://www.cnn.com/';{queryParams: {'token'; this.token}}});
 } */




} 


/* skipLocationChange: true */