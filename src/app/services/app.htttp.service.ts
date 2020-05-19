import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductData } from '../models/app.product';

@Injectable({
  providedIn:'root'
})
export class HttpService {
    private url: string;
   // inject the ctor with HttpClient class
   // the HttpClient will be resolved by
   // the HttpClientModule in @NgModule class
   constructor(private http: HttpClient){
      this.url = 'https://apiapptrainingnewapp.azurewebsites.net/api/Products';
   }

   get(): Observable<ProductData[]> {
      let response: Observable<ProductData[]> = null;
      response  = this.http.get<ProductData[]>(this.url);
      return response;
   }

   post(prd: ProductData): Observable<ProductData> {
    let response: Observable<ProductData> = null;
    const options = {
        headers: new HttpHeaders({
           'Content-Type': 'application/json'
        })
    };
    response  = this.http.post<ProductData>(this.url, prd, options);
    return response;
 }

 put(id: number, prd: ProductData): Observable<ProductData> {
  let response: Observable<ProductData> = null;
  const options = {
      headers: new HttpHeaders({
         'Content-Type': 'application/json'
      })
  };
  response  = this.http.put<ProductData>(`${this.url}/${id}`, prd, options);
  return response;
 }
 delete(id: number): Observable<ProductData> {
  let response: Observable<ProductData> = null;
  response  = this.http.delete<ProductData>(`${this.url}/${id}`);
  return response;
}
}
