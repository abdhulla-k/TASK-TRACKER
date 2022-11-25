import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  todo = ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'];

  constructor() { }

  addNewTask(task: any) {
    this.todo.push(task);
  }

  getTasks() {
    return this.todo;
  }
}
