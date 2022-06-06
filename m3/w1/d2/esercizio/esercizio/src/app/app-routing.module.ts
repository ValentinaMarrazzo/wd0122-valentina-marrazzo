import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageActiveComponent } from './page-active/page-active.component';
import { PageInactiveComponent } from './page-inactive/page-inactive.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'page-active',
    component: PageActiveComponent
  },
  {
    path: 'page-inactive',
    component: PageInactiveComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
