import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url:string = 'http://localhost.4201/register'

  constructor(private http:HttpClient) { }

  signUp(user:object){
    return this.http.post(this.url, user)
  }
}
