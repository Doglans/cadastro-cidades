import { Injectable } from '@angular/core';
import { HttpEvent, 
         HttpHandler, 
         HttpInterceptor, 
         HttpRequest 
        } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
  export class Interceptor implements HttpInterceptor{
    intercept( request: HttpRequest<any>, next: HttpHandler ):  
    Observable< HttpEvent<any> > {
      console.log('teste' + request);
      request = request.clone({
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': 'Basic c3VwZXI6c3VwZXI=',          
          'Access-Control-Allow-origin': 'http://localhost:4200/',
          'Access-Control-Aloow-Headers': 'Controll-Type, Acces-Control-Allow-origin, Acces-Control-Allow-Headers, X-Requested-With',
          'returnFormatVersion': '2',
        })
      });
      return next.handle(request);
    }

  }