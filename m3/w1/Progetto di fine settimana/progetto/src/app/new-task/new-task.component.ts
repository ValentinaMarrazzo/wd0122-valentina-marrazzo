import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Todo } from '../classes/classes';
import { TodosService } from '../service/todos.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent implements OnInit {

  id:number = Math.random() * (6 - 20) + 6
  title:string = ''
  completed:boolean = false

  constructor(private taskService:TodosService, private route:Router) { }

  ngOnInit(): void {
  }

  addThis(){
    let newTask = new Todo(this.id, this.title, this.completed)
    this.taskService.addTask(newTask)
    this.route.navigate(['todo'])

    this.title = ''
  }

}
