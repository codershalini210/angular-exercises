import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
interface Task {
  name: string;
  completed: boolean;
}
@Component({
  selector: 'app-todo-que',
  imports: [CommonModule],
  templateUrl: './todo-que.html',
  styleUrl: './todo-que.css',
})
export class TodoQUE {
 showCompleted: boolean = true;

  tasks: Task[] = [
    { name: 'Complete Angular assignment', completed: false },
    { name: 'Read TypeScript notes', completed: true },
    { name: 'Practice directives', completed: false },
    { name: 'Submit project', completed: true }
  ];

  toggleCompletedTasks() {
    this.showCompleted = !this.showCompleted;
  }

  toggleTask(task: Task) {
    task.completed = !task.completed;
  }
}
