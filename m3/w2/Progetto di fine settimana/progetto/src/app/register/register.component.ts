import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private userService:UserService) { }

  ngOnInit(): void {
  }

  authData = {
    username: '',
    email: '',
    password: ''
  }

  signup(){
    this.userService.signUp(this.authData).subscribe(res=>{
      console.log(res)
    })
  }

}
