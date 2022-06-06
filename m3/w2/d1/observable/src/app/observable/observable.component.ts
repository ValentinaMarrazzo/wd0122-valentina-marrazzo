import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators'


@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit, OnDestroy {

  constructor() { }

  sub!:Subscription
  sub2!:Subscription

  ngOnInit(): void {
    this.sub = interval(1000).subscribe(numero => console.log(numero))
    //metodo che fornisce dati in un lasso di tempo da indicare. Va inserita in ngOnInit per implementare rxjs per far fungere gli observable. Anche se si cambia pagina, avendo utilizzato subscribe, si continua a ricevere dati

    const customInterval = new Observable(observer => {
      let count = 0
      setInterval(() => {
        observer.next(count)
        //next() comunica direttamente il valore al subscribe così che possa essere utilizzato
        count++
        if(count > 3){
          observer.error('numero troppo elevato')
          //error() lancia un errore bloccante
        }
        if(count===2){
          observer.complete()
          //completa l'observable in maniera positiva
        }
      }, 1000)
    })

    this. sub2 = customInterval
    .pipe(
      filter((numero:any) => numero > 10),
      map((numero:any) => `Eseguito ${numero} volte`),
      //per essere usato va importato dagli operators di rxjs
    )
    .subscribe(numero => console.log(numero),
    error => {throw new Error(error)},
    () => console.log('completato'))
  }

  ngOnDestroy(): void {
    this.sub = unsubscribe()
    //implementare ondestroy significa che al cambio di pagina le vecchi iscrizioni vengano disconnesse
    this.sub2.unsubscribe()
  }

}

function unsubscribe(): Subscription {
  throw new Error('Function not implemented.');
}

