import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavComponent } from './nav/nav.component';
import { SportsModule } from './sports/sports.module';


@NgModule({
  declarations: [
    AppComponent,

    NavComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SportsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }