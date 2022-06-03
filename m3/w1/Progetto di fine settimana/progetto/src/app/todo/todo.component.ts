import { Component, OnInit } from '@angular/core';
import { Todo } from '../classes/classes';
import { TodosService } from '../service/todos.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  tasks!:Todo[]
  ct = ''

  constructor(private taskService:TodosService) {
    this.tasks = taskService.tasks
  }


  ngOnInit(): void {
  }

  doneThis(id:number){
    this.taskService.completeTask(id)
  }

  changeThis(id:number, ct:string){
    this.taskService.changeTask(id, ct)
    ct = ''
  }

  removeThis(id:number){
    this.taskService.removeTask(id)
  }

}
