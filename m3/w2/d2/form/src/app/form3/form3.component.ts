import { Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-form3',
  templateUrl: './form3.component.html',
  styleUrls: ['./form3.component.css']
})
export class Form3Component implements OnInit {
/**
 * Reactive forms
 */
form3!:FormGroup


  constructor() { }

  ngOnInit(): void {

    this.form3 = new FormGroup({
      autData: new FormGroup({
        email: new FormControl(null, [Validators.required, Validators.email]),
        password: new FormControl(null, Validators.required),
        city: new FormControl('Milano'),
        sports: new FormArray([])
      })
    })

  }

  addSport(){
    let control = new FormControl(null); //crea un nuovo form control
    (this.form3.get('sports') as FormArray).push(control)
  }

  getSportFields(){
    return (this.form3.get('sports') as FormArray).controls
  }

  submit(){
    console.log(this.form3)
  }


}
