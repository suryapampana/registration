import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Employee } from '../employee/employee';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { catchError, map } from "rxjs/operators";
import jwt_decode, { JwtPayload } from 'jwt-decode';


const headers = new HttpHeaders().set('Content-Type', 'application/json');
@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  status: string;
  exp: number;
 
  

  constructor(private _http : HttpClient ) { }

  public loginEmployeeFromRemote(employee: Employee){
    return this._http.post<any>("http://localhost:8080/loginuser",{userId: employee.userId, password: employee.password})
      .pipe(catchError(this.handleError),
        map(
          data => {
            if (data && data.jwtToken) {
            localStorage.setItem("userId", employee.userId);
            let tokenStr = data.jwtToken;
            localStorage.setItem("token", tokenStr);
            const encodeToken = (localStorage.getItem('token'));
    const decodeToken: any = jwt_decode(encodeToken!);
    const date = new Date(0);

    let tokenExpDate = date.setUTCSeconds(decodeToken.exp);
            console.log(decodeToken.exp, date);
            /* return data;  */
            }
          }

        )
      ) 
  }

  isUserLoggedIn() {
    let userId = localStorage.getItem("userId");
    let token  = localStorage.getItem("token")
    return !(userId === null && token === null);    
  } 

  autoLogout(): boolean{
    const encodeToken = (localStorage.getItem('token'));
    const decodeToken: any = jwt_decode(encodeToken!);

    if(decodeToken.exp === undefined)
    {
      return false;
    }
    const date = new Date(0);

    let tokenExpDate = date.setUTCSeconds(decodeToken.exp);

    if(tokenExpDate.valueOf() > new Date().valueOf())
    {
      return true;
    }

    return false;
  }

  private handleError(httpError: HttpErrorResponse) {
    let message:string = '';

    if (httpError.error instanceof ProgressEvent) {
      console.log('in progrss event')
      message = "Network error";
    }
    else {
      message = httpError.error.message;
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${httpError.status}, ` +
        `body was: ${httpError.error}`);
    }
    // Return an observable with a user-facing error message.
    return throwError(message);
  }

  public registerEmployeeFromRemote(employee :Employee):Observable<any>{
    return this._http.post<any>("http://localhost:8080/registeruser" ,employee)
    .pipe(catchError(this.handleError));
  }

 /*  handleError(error: Response){
    this.message = error;
          this.status = false;

  } */
  public forgotPasswordFromRemote(employee: Employee):Observable<any>{
    return this._http.post<any>("http://localhost:8080/sendpassword",employee)
    .pipe(catchError(this.handleError));
  }

  public forgotUserIdFromRemote(employee: Employee):Observable<any>{
    return this._http.post<any>("http://localhost:8080/senduserid",employee)
    .pipe(catchError(this.handleError));
  }

  userid = localStorage.getItem("userId")

  public getUserByUserIdFromRemote(employee: Employee):Observable<any>{
    return this._http.get<any>("http://localhost:8080/user" + '/'+ localStorage.getItem("userId"),{ headers
    } )
    .pipe(catchError(this.handleError));
  }

  
   
  

}



/* isUserLoggedIn() {
  let userId = localStorage.getItem("userId");
  let token  = localStorage.getItem("token")
  return !(userId === null && token === null);    
} 

autoLogout(): boolean{
  const encodeToken = (localStorage.getItem('token'));
  const decodeToken: any = jwt_decode(encodeToken!);

  if(decodeToken.exp === undefined)
  {
    return false;
  }
  const date = new Date(0);

  let tokenExpDate = date.setUTCSeconds(decodeToken.exp);

  if(tokenExpDate.valueOf() > new Date().valueOf())
  {
    return true;
  }

  return false;
} */