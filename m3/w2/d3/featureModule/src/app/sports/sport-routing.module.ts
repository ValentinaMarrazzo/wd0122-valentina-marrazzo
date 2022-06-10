import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListaSportsComponent } from './lista-sports/lista-sports.component';


const routes: Routes = [

      {
        path: '',
        component: ListaSportsComponent
      }

]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SportRoutingModule { }
