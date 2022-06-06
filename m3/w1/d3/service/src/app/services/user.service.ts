import { Injectable } from '@angular/core';
import { User } from '../classes/user';

@Injectable({
  providedIn: 'root'
})//questo decoratore fa sì che il service possa essere richiamato in qualsiasi componente
export class UserService {

  constructor() { }

  users:User[] = [
    {
      id: 1,
      name: 'Mario',
      lastname: 'Bros',
      gender: 'male'
    },
    {
      id: 2,
      name: 'Luigi',
      lastname: 'Bros',
      gender: 'male'
    }
  ]

  addUser(user:User){
    this.users.push(user)
  }
  updateUser(){}
  deleteUser(){}

  getUserById(id:number){
    return this.users.find(user => user.id === id)
  }
}
