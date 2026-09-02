import { Component, OnInit } from '@angular/core';

interface Task {
  taskName: string;
  isCompleted: boolean;
}

const STORAGE_KEY = 'miz.todo.tasks';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  taskArray: Task[] = [];
  newTask = '';

  ngOnInit(): void {
    this.taskArray = this.loadTasks();
  }

  get completedCount(): number {
    return this.taskArray.filter((t) => t.isCompleted).length;
  }

  addTask(): void {
    const name = this.newTask.trim();
    if (!name) return;

    this.taskArray.push({ taskName: name, isCompleted: false });
    this.newTask = '';
    this.saveTasks();
  }

  onDelete(index: number): void {
    this.taskArray.splice(index, 1);
    this.saveTasks();
  }

  onCheck(index: number): void {
    this.taskArray[index].isCompleted = !this.taskArray[index].isCompleted;
    this.saveTasks();
  }

  private loadTasks(): Task[] {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) return JSON.parse(raw);
    } catch {
      /* ignore corrupted storage */
    }
    return [{ taskName: 'Finish the final project', isCompleted: false }];
  }

  private saveTasks(): void {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(this.taskArray));
  }
}
