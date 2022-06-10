import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.css']
})
export class Form2Component implements OnInit {

  @ViewChild('f', {static:true}) form2!:NgForm


  constructor() { }

  ngOnInit(): void {
    this.form2.statusChanges?.subscribe(status => console.log(this.form2))

  }

  submit(){
    console.log(this.form2)
  }

  setDati(){

    this.form2.form.setValue({
      authData:{
        email: 'vale@email.it',
        password: '112233'
      }
    })

  }//La funzione si aggancia al form e con setValue() riempie il form con i valori indicati

  updateCity(){
    this.form2.form.patchValue({
      city: 'Roma'
    })
  }

}
