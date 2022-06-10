import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaSportsComponent } from './lista-sports/lista-sports.component';
import { SportComponent } from './sport/sport.component';
import { SportPageComponent } from './sport-page.page';
import { AppRoutingModule } from '../app-routing.module';
import { SportRoutingModule } from './sport-routing.module';



@NgModule({
  declarations: [
    SportPageComponent,
    ListaSportsComponent,
    SportComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    SportRoutingModule
  ]
})
export class SportsModule { }
