import { Component, OnInit } from '@angular/core';
import { Post } from '../page-active/posts.service';

@Component({
  selector: 'app-page-inactive',
  templateUrl: './page-inactive.component.html',
  styleUrls: ['./page-inactive.component.scss']
})
export class PageInactiveComponent implements OnInit {

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
