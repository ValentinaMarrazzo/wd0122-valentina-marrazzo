import { HttpClient } from '@angular/common/http'
import { Component } from '@angular/core';
import { map } from 'rxjs/internal/operators/map';
import { User } from './user';
import { UserService } from './user.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  [x: string]: any;

  users:User[] = []

  constructor(private userService:UserService){}

  /*fetchUsers(){
    this.http.get<{data:User[]}>('https://reqres.in/api/users?page=2')
    .pipe(
      map(res => res.data)
    )
    .subscribe(res => {
      this.users = res
    })
  }*/
fetchUsers(){
  this.userService.getUsers().subscribe((res: User[])=>{
    console.log(res)
    this.users = res
  })

}
}
