import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class CompanyServiceService {

  constructor(private http:HttpClient) { }

  register(user:any):Observable<any>{
    return this.http.post('http://localhost:8080/api/register-company',user)
  }

  login(details:any):Observable<any>{
    return this.http.post('http://localhost:8080/api/login-company',details)
  }
}
