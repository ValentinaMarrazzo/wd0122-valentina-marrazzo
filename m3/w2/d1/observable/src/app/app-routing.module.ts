import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ObservableComponent } from './observable/observable.component';
import { Pagina1Component } from './pagina1/pagina1.component';

const routes: Routes = [
  {
    path: 'pagina1',
    component: Pagina1Component
  },
  {
    path: 'observable',
    component: ObservableComponent

  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
