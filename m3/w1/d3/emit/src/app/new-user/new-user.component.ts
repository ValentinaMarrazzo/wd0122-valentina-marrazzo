import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { User } from '../class/user';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

  //in questo caso il componente si occupa di creare un nuovo utente e inviarlo al genitore che ne farà poi il push

  constructor() { }

  ngOnInit(): void {
    //Sia ngOnInit che il constructor scatenano un evento all'avvio del componente. La differenza è che ngOnInit si ha la certezza che le proprietà siano tutte inizializzate, quindi vengono lanciate dopo il constructor
  }

  newName:string = ''
  newLastname:string = ''

  @Output() onManCreated = new EventEmitter() //Output è un decoratore che predispone per l'uscita dal documeto all'interno del quale è chiamato: così facendo è possibile inviare dati all'elemento genitore. EventEmitter crea un evento ad hoc che comunica che sta succedendo qualcosa al genitore. Quando però si gestiscono server più complessi non va usato
  @Output() onWomanCreated = new EventEmitter()

  onAddMan(){
    let newUser:User = new User(this.newName, this.newLastname, 'male')
    this.onManCreated.emit(newUser) //il metodo emit() è disponibile per le istanze di EventEmitter. Necessario per far leggere l'azione al genitore
    this.resetForm()
  }

  onAddWoman(){
    let newUser:User = new User(this.newName, this.newLastname, 'female')
    this.onWomanCreated.emit(newUser)
    this.resetForm()
  }

  resetForm(){
    this.newName = ''
    this.newLastname = ''
  }

}
