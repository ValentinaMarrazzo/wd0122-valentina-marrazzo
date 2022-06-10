import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  movies:any[] = []

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.getMovie()
    console.log(this.movies)
  }

  getMovie(){
    return this.http.get('http://localhost:4200/api/movie/popular').subscribe((res:any)=>{
      this.movies = res
    })
  }

}
