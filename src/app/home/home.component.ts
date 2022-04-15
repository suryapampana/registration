import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { WSAEINVALIDPROCTABLE } from 'constants';
import { Employee } from '../employee/employee';
import { RegistrationService } from '../registrationService/registration.service';

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
projects:any =[];
@Input() insideSideNav!: MatSidenav;
  
   

  constructor(public _router : Router, private route: ActivatedRoute, private snackBar: MatSnackBar, private _http : HttpClient, private _service: RegistrationService) { }

  ngOnInit() {
    this.getAllprojects();
    this.userId = (localStorage.getItem('userId')!);
    this.fullName = (localStorage.getItem('fullName')!);
    this.token = localStorage.getItem('token')!;
    
  }
logoutEmployee(){
  localStorage.clear();
  this.url = new URL("http://apacworld.in.capgemini.com:9090/APACWorld");
 window.location.href=this.url;
 this.snackBar.open("Signout Successfull", "close",{
  duration: 3000,
  verticalPosition: 'top',
  panelClass: ['success'], 
});
  /* alert("Signout Successfull..!") */

}

getAllprojects(){
  this._service.getAllProjects().subscribe(
    data=>{
      this.projects=data;
      console.log(data, this.projects);
    }
  )
}

 cdpPortal(){
 /* this._router.navigate(['/cdp-employee'], {queryParams: {'userid':this.userId}, skipLocationChange: true}); */
 /* this.url = new URL("https://www.google.com?v="+this.token); */
 /* this.url = new URLSearchParams(['https://www.google.com'],queryParams: {fd: this.token}); */

 /* this.url = new URL("http://apacworld.in.capgemini.com:9090/cdp-frontend?"+this.token);
 window.location.href=this.url;  */
 /* window.open(this.url) ; */
 /* let headers = new HttpHeaders()
 headers = headers.set('Authorization', 'Basic blah');
 headers = headers.set('anotherHeader', 'More blah');
 this._http.request('GET', 'http://apacworld.in.capgemini.com:9090/cdp-frontend', { headers }) */
 const httpHeaders = new HttpHeaders({
   'content-type': 'application/json',
   'Authorization': `Bearer ${this.token}`
 });
 this.url ="http://apacworld.in.capgemini.com:9090/cdp-frontend",{headers: httpHeaders};
 window.location.href=this.url; 
 
 } 

 ideathon(){
  const httpHeaders = new HttpHeaders({
    'content-type': 'application/json',
    'Authorization': `Bearer ${this.token}`
  });
  this.url ="http://apacworld.in.capgemini.com:9090/Ideathon-frontend",{headers: httpHeaders};
  window.location.href=this.url; 
 }

 digitalOnboarding(){
  const httpHeaders = new HttpHeaders({
    'content-type': 'application/json',
    'Authorization': `Bearer ${this.token}`
  });
  this.url ="http://apacworld.in.capgemini.com/digital-onboarding",{headers: httpHeaders};
  window.location.href=this.url; 
 }

 /* this._router.navigate([]).then(result=>{window.location.href = 'http://www.cnn.com/';{queryParams: {'token'; this.token}}});
 } */

 getProject(id:number){

  const httpHeaders = new HttpHeaders({
    'content-type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers':'Content-Type, Authorization, X-Requested-With',
    'Authorization': `Bearer ${this.token}`,
  });
  this._service.getProjectsById(id).subscribe(
    data=>{
      this.url=data.projectUrl,{headers: httpHeaders};
       window.location.href=this.url+"?"+this.token; 
     /*  window.open(this.url); */
    }
  )
 }



} 


/* skipLocationChange: true */
