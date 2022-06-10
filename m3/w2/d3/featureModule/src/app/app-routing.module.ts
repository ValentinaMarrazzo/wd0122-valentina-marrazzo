import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

import { SportPageComponent } from './sports/sport-page.page';

const routes: Routes = [
  {
    path: 'sports',
    component: SportPageComponent,
   // loadChildren: () => import('./sports')
  },
  {
    path: '',
    component: AppComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
