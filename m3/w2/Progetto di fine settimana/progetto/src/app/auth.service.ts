import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  isLoggedIn:boolean = this.isUserLogged()
  url:string = 'http://localhost:4200/login'

  login(authData:any){
    return this.http.post(this.url, authData)
  }

  logUser(token:string){
    localStorage.setItem('token', token)
    this.isLoggedIn = true
  }

  isUserLogged(){
    return localStorage.getItem('token') != null
  }
}
