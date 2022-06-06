import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../classes/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  userService: any;

  constructor(private service:UserService,
    private router:ActivatedRoute) { }

  user!:User

  ngOnInit(): void {
    let id = this.router.snapshot.params['id']
    this.user = this.userService.getUserById(id)
  }

}
