import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register.component';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

const r:Routes = [
  {
    path: '',
    component: RegisterComponent
  }
]

@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(r),
    FormsModule,
    MatButtonModule
  ]
})
export class RegisterModule { }
