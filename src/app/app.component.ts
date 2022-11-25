import { Component, EventEmitter, Output } from '@angular/core';

import { TasksService } from './tasks.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'task_tracker';
  constructor(private taskService: TasksService) {}
  
  addNewTask(task:String) {
    this.taskService.addNewTask(task)
  }
}
