import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { resolve } from 'dns';

@Component({
  selector: 'app-form4',
  templateUrl: './form4.component.html',
  styleUrls: ['./form4.component.css']
})
export class Form4Component implements OnInit {

  form4!:FormGroup


  constructor(private fb:FormBuilder) { } //con this.fb si crea un form group

  ngOnInit(): void {

    this.form4 = this.fb.group({
      autData:this.fb.group({
        email: this.fb.control(null, [Validators.required, Validators.email]),
        password: this.fb.control(null, Validators.required),
        city: this.fb.control('Milano'),
        sports: this.fb.array([])
      })
    })

    this.form4.statusChanges.subscribe(value => console.log(value))
    this.form4.valueChanges.subscribe(value => console.log(value))//Ricevo al cambio di valore

  }

  listaEmailProibite:string[] = ['test@test.it', 'prova@prova.it']

  /*emailProibite(FormControl:FormControl){
    return new Promise(resolve, reject) => {
      setTimeout(() => {
        if(this.listaEmailProibite.includes(FormControl.value)){
          resolve()
          return {
            emailProibite: true
          }
        }
        return null

      }, 2000);
    }
  }*/

  addSport(){
    let control = this.fb.control(null); //crea un nuovo form control
    (this.form4.get('sports') as FormArray).push(control)
  }

  getSportFields(){
    return (this.form4.get('sports') as FormArray).controls
  }

  submit(){
    console.log(this.form4)
  }

}
