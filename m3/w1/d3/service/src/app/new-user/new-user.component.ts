import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../classes/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})

export class NewUserComponent implements OnInit {

  constructor(private userService:UserService,
    private route:Router) { }

  ngOnInit(): void {
  }

  name:string = ''
  lastname:string = ''
  gender:string = ''

  save(){
    let newuser = new User(this.name, this.lastname, this.gender)
    this.userService.addUser(newuser)
    this.route.navigate(['/'])
  }
}
