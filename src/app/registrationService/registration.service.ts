import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { Employee } from '../employee/employee';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { catchError, map } from "rxjs/operators";
import jwt_decode, { JwtPayload } from 'jwt-decode';
import { CookieService } from 'ngx-cookie-service';


const headers = new HttpHeaders().set('Content-Type', 'application/json');
@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  
  status: string;
  exp: number;
  
 
  

  constructor(private _http : HttpClient, private cookieService: CookieService ) { }

  public loginEmployeeFromRemote(employee: Employee){
    return this._http.post<any>("http://apacworld.in.capgemini.com:9090/MillennialGarageLogin/loginuser",{userId: employee.userId, password: employee.password})
      .pipe(catchError(this.handleError),
        map(
          data => {
            if (data && data.jwtToken) {
            localStorage.setItem("userId", employee.userId);
            let tokenStr = data.jwtToken;
            localStorage.setItem("token", tokenStr);
            /* sessionStorage.setItem("token", tokenStr);
            this.cookieService.set("token", tokenStr);  */

          /*   const encodeToken = (localStorage.getItem('token'));
    const decodeToken: any = jwt_decode(encodeToken!);
    const date = new Date(0);

    let tokenExpDate = date.setUTCSeconds(decodeToken.exp);
            console.log(decodeToken.exp, date); */
            /* return data;  */
            }
          }

        )
      ) 
  }

  isUserLoggedIn():boolean {
    let userId = localStorage.getItem("userId");
    let token  = localStorage.getItem("token");
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
    return this._http.post<any>("http://apacworld.in.capgemini.com:9090/MillennialGarageLogin/registeruser" ,employee)
    .pipe(catchError(this.handleError));
  }

 /*  handleError(error: Response){
    this.message = error;
          this.status = false;

  } */
  public forgotPasswordFromRemote(employee: Employee):Observable<any>{
    return this._http.post<any>("http://apacworld.in.capgemini.com:9090/MillennialGarageLogin/sendpassword",employee)
  }

  public forgotUserIdFromRemote(employee: Employee):Observable<any>{
    return this._http.post<any>("http://apacworld.in.capgemini.com:9090/MillennialGarageLogin/senduserid",employee)
  }

  userid = localStorage.getItem("userId")

  public getUserByUserIdFromRemote(employee: Employee):Observable<any>{
    return this._http.get<any>("http://apacworld.in.capgemini.com:9090/MillennialGarageLogin/user" + '/'+ localStorage.getItem("userId"),{ headers
    } )
    .pipe(catchError(this.handleError));
  }


  public getAllProjects():Observable<any>{
    return this._http.get<any>("http://apacworld.in.capgemini.com:9090/MillennialGarageLogin/getallprojects" ,{ headers
    } )
    .pipe(catchError(this.handleError));
  }
  
  public getProjectsById(id: number):Observable<any>{
    return this._http.get<any>(`http://apacworld.in.capgemini.com:9090/MillennialGarageLogin/getprojects/${id}` ,{ headers
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