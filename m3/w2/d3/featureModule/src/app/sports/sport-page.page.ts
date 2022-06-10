import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sport-page',
  template: `
  <router-outlet></router-outlet>
  `,
})
export class SportPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
