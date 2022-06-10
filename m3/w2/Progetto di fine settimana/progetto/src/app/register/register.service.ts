import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from "@auth0/angular-jwt";
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  jwtHelper = new JwtHelperService()

  url = 'http://localhost.4201'

  constructor(private http:HttpClient) { }

  signup(data:{email:string, password:string, firstnome:string}){
   return this.http.post(this.url+'/register', data).pipe(
      tap((res) =>{

      })
    )
  }
}
