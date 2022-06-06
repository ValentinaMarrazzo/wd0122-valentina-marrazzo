import { Component, OnInit } from '@angular/core';
import { Post } from '../interface/post';
import { getPosts, updatePost } from './posts.service';




@Component({
  selector: 'app-page-active',
  templateUrl: './page-active.component.html',
  styleUrls: ['./page-active.component.scss']
})
export class PageActiveComponent implements OnInit {

  activePost!:Post[] = []

  constructor(){ }

  ngOnInit(): void {
    this.activePost = []

  }


}
