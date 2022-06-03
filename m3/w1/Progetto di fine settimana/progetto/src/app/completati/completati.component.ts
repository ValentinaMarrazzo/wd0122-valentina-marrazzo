import { Component, OnInit } from '@angular/core';
import { Todo } from '../classes/classes';
import { TodosService } from '../service/todos.service';

@Component({
  selector: 'app-completati',
  templateUrl: './completati.component.html',
  styleUrls: ['./completati.component.css']
})
export class CompletatiComponent implements OnInit {

  tasks!:Todo[]
  newTask!:Todo

  constructor(private taskService:TodosService) {
    this.tasks = taskService.tasks
  }

  ngOnInit(): void {
  }

  reDoThis(){
    this.taskService.reDo()
  }

}
