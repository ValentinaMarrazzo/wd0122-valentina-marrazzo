import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.css']
})
export class Form1Component implements OnInit {

  @ViewChild('f', {static:true}) form1!:NgForm
  //ViewChild cerca gli elementi nell'html con questo nome. Perhé ngoninit richiama gli elementi immediatamente, si aggiunge static:true per rendere disponibile l'elemento sin da subito. Il tutto infine è affidato alla proprietà form1 che andrà riempita con i dati

  constructor() { }

  ngOnInit(): void {
    this.form1.statusChanges?.subscribe(status => console.log(status))

    //statusChange restituisce un observable. Ogni volta che c'è un cambiamento di stato, il subscribe di statuschange lo legge
  }

  submit(){
    console.log(this.form1)
  }
}
