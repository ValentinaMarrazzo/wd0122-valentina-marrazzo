import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input2',
  templateUrl: './input2.component.html',
  styleUrls: ['./input2.component.css']
})
export class Input2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  name:string = 'Carla'


}
