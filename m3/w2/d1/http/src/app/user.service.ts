import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/internal/operators/map';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: any;

  constructor(private http:HttpClient) { }//adesso http contiene tutti i metodi per fare chiamate ajax

  getUsers():any{
    return this.http.get<{data:User[]}>('https://reqres.in/api/users?page=2')
    .pipe(
      map(res => res.data)
    )
    .subscribe(res => {
      this.users = res
    })
  }
}
