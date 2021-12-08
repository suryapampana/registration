import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Employee } from '../employee/employee';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  

  constructor(private _http : HttpClient ) { }

  public loginEmployeeFromRemote(employee: Employee):Observable<any>{
    return this._http.post<any>("http://localhost:8080/loginuser",employee)

  }

  public registerEmployeeFromRemote(employee :Employee):Observable<any>{
    return this._http.post<any>("http://localhost:8080/registeruser" ,employee);
  }

 /*  handleError(error: Response){
    this.message = error;
          this.status = false;

  } */
  public forgotPasswordFromRemote(employee: Employee):Observable<any>{
    return this._http.post<any>("http://localhost:8080/sendpassword",employee)
  }

  public forgotUserIdFromRemote(employee: Employee):Observable<any>{
    return this._http.post<any>("http://localhost:8080/senduserid",employee)
  }
}
