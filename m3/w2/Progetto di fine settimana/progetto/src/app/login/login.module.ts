import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login.component';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule } from '@angular/forms';


const r:Routes = [
  {
    path: '',
    component: LoginComponent
  }
]

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(r),
    FormsModule,
    MatButtonModule,
  ]
})
export class LoginModule { }
