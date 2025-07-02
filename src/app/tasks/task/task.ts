import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { DatePipe } from '@angular/common';

import { type TaskData } from './task.model';
import { Card } from "../../shared.ui/card/card";
import { TasksService } from '../tasks.service';


@Component({
  selector: 'app-task',
  imports: [Card, DatePipe],
  templateUrl: './task.html',
  styleUrl: './task.css'
})
export class Task {
  @Input({ required: true }) task!: TaskData;
  // @Output() complete = new EventEmitter<string>();
  private tasksService = inject(TasksService);


  onCompleteTask() {
    this.tasksService.removeTask(this.task.id);
  }
}
