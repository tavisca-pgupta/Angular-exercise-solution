import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResponseData, RegisterUser, LoginUser, ProductResponse } from '../models/app.models';

@Injectable({
  providedIn: 'root'
})
export class SecureService {
  constructor(private http: HttpClient) {
  }

  registerUser(user: RegisterUser): Observable<ResponseData> {
    let response: Observable<ResponseData> = null;
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    response = this.http.post<ResponseData>(`http://localhost:5000/api/Auth/Register`,
       user, options);
    return response;
  }

  loginUser(user: LoginUser): Observable<ResponseData> {
    let response: Observable<ResponseData> = null;
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    response = this.http.post<ResponseData>(`http://localhost:5000/api/Auth/Login`,
       user, options);
    return response;
  }

  getData(token): Observable<ProductResponse[]> {
    let response: Observable<ProductResponse[]> = null;
    // add the tokne in response header
    const options = {
        headers: new HttpHeaders({
          AUTHORIZATION: `Bearer ${token}`
        })
    };
    response = this.http.get<ProductResponse[]>(`http://localhost:5000/api/Products`, options);
    return response;
  }
}
