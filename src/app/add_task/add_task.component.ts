import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector: 'app-add-task',
    templateUrl: './add_task.component.html',
    styleUrls: ['./add_task.component.css']
})

export class AddTaskComponent {
    taskEntered!: String;
    className: String = '';
    @Output() taskShare = new EventEmitter<String>();
    

    addTask( task: HTMLInputElement) {
        if(task.value) {
            this.className = '';
            // console.log(task.value);
            this.taskShare.emit(task.value);
        } else {
            this.className = 'border-danger'
        }
    }
}