import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MoviesComponent } from './movies.component';

const r:Routes = [
  {
    path: '',
    component: MoviesComponent
  }
]

@NgModule({
  declarations: [
    MoviesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(r)
  ]
})
export class MoviesModule { }
