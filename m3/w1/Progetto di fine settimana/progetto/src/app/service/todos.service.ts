import { Injectable } from '@angular/core';
import { Todo } from '../classes/classes';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  constructor() { }

  tasks:Todo[] = [
    {
      id: 1,
      title: 'rifare il letto',
      completed: true
    },
    {
      id: 2,
      title: 'riordinare la stanza',
      completed: true
    },
    {
      id: 3,
      title: 'disfarsi degli oggetti inutili',
      completed: false
    },
    {
      id: 4,
      title: 'spolverare le superfici',
      completed: false
    },
    {
      id: 5,
      title: 'passare l\'aspirapolvere',
      completed: false
    },
    {
      id: 6,
      title: 'lavare i pavimenti',
      completed: false
    }
  ]

  reDo():void{
    let redo = new Promise((resolve, reject)=> {
      setTimeout(() => {
    let taskToRedo = this.tasks.findIndex((t => t.completed === true))

    return this.tasks[taskToRedo].completed = false

    resolve('Successo')
      }, 2000)
    })
  }

  addTask(nt:Todo):void{
    this.tasks.push(nt)
  }

  completeTask(id:number):void{
    let complete = new Promise((resolve, reject)=> {
      setTimeout(() => {
        let taskToRedo = this.tasks.findIndex((t => t.id === id))
        return this.tasks[taskToRedo].completed = true
        resolve('Successo')
      }, 2000)
    })
  }


  changeTask(id:number, ct:string):void{
    let change = new Promise((resolve, reject) => {
      setTimeout(() => {
        let taskToChange = this.tasks.findIndex((t => t.id === id))
        return this.tasks[taskToChange].title = ct
      }, 2000)
    })
  }

  removeTask(id:number){
    let del = new Promise((resolve, reject) => {
      setTimeout(() => {
        let taskToDelete = this.tasks.findIndex((t => t.id === id))
        return this.tasks.splice(taskToDelete, 1)
      }, 2000)
    })
  }
}
