import { Component } from '@angular/core';
import { Photo } from './photo';
import { PhotoService } from './photo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  like:number = 0
  active:boolean = true

  photos:Photo[] = []

  constructor(private photoService:PhotoService){ }

  ngOnInit(){
    this.fetchPhoto()
    console.log(this.photos)
  }

  fetchPhoto(){
    this.photoService.getPhoto().subscribe((res:any) => {
      this.photos = res
    })
  }

 likes():void {
    this.like += 1

  }
}
