import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RegistrationService } from './registration.service';

@Injectable()
export class BasicAuthHttpInterceptorService implements HttpInterceptor{

  constructor(private _service: RegistrationService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let modifiedReq =req
    if (localStorage.getItem('userId') && localStorage.getItem('token')) {
      modifiedReq = req.clone({

       setHeaders: {
         
          Authorization : `Bearer ${localStorage.getItem('token')}`

        } 
      });
    }

    return next.handle(modifiedReq);
} 
}
