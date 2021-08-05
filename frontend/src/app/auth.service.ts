import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JwtHelperService } from "@auth0/angular-jwt";

export const JWT_NAME ="emp-token";
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _loginUrl = "http://localhost:3400/employerlogin";
  
  constructor(private http: HttpClient) { }


  loginUser(user:any)
  {
    return this.http.post<any>(this._loginUrl, user)
  }
  loggedIn()
  {
    return !!localStorage.getItem('token')
  }
  getToken()
  {
    return localStorage.getItem('token')
  }

}
