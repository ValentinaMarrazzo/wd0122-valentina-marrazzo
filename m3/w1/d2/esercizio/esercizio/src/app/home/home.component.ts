import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  goToPost(a:boolean):void{
    if(a){
      this.router.navigate(["/page-active"])
    }else{
      this.router.navigate(["/page-inactive"])
    }
  }
}
