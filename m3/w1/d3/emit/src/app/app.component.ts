import { Component } from '@angular/core';
import { User } from './class/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  users:User[] = [
    {
      name: 'Mario',
      lastname: 'Bros',
      gender: 'male'
    },
    {
      name: 'Luigi',
      lastname: 'Bros',
      gender: 'male'
    }
  ]

  name:string = '';
  lastname:string = '';

  aggiungiUomo(user:User){

    this.users.push(user)

  }
  aggiungiDonna(user:User){

    this.users.push(user)

  }

  visibile:boolean = false

  title = 'emit';
}
