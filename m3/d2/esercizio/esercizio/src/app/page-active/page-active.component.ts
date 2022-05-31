import { Component, OnInit } from '@angular/core';
import { Post } from './posts.service';


@Component({
  selector: 'app-page-active',
  templateUrl: './page-active.component.html',
  styleUrls: ['./page-active.component.scss']
})
export class PageActiveComponent implements OnInit {

  posts:Post[] = []

  constructor() {
    fetch('../../assets/db.json')
    .then(res => res.json())
    .then(res => {
      this.posts = res.filter((post:Post) => {
        return post.active
      })
    })

  }


  ngOnInit(): void {
  }


}
