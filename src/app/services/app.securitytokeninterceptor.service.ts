import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SecureService } from './app.secure.service';
@Injectable()
export class SecurityTokenInterceptorService implements HttpInterceptor {
  // 1
  constructor(private serv: SecureService) {}
   // 2
  intercept(req: HttpRequest<any>, next: HttpHandler):
   Observable<HttpEvent<any>> {
    // 3 We retrieve the token, if any
    const token = localStorage.getItem('token');
    // 4
    let newHeaders = req.headers;
    // 5
    if (token) {
      console.log(token);
       // 6 If we have a token, we append it to our new headers
      newHeaders = newHeaders.append('Authorization', `Bearer ${token}`);
    }
    // 7 clone the request with  new headers
    const authReq = req.clone({headers: newHeaders});
    // 8
    return next.handle(authReq);
   }
}