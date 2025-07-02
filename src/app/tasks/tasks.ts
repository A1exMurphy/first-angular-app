import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from "./task/task";
import { NewTask } from "./new-task/new-task";
import { type NewTaskData } from './task/task.model';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  imports: [Task, NewTask],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css'
})
export class Tasks {
  //adding a question mark allows TypeScript to be okay if our selected user doesn't return a name property in the data name?: string
  @Input({ required: true }) userId!: string;
  @Input({ required: true }) name!: string | undefined;
  isAddingTask = false;

  // private tasksService = new TasksService();
  constructor(private tasksService: TasksService) {

  }



  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.userId);
  }

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCloseAddTask() {
    this.isAddingTask = false;
  }
}
