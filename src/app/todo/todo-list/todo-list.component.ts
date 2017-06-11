import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-todo-list',
  template: `
    <ul class="todo-list">
      <app-todo-item *ngFor="let todo of todos" [data]="todo"></app-todo-item>
    </ul>
  `
})
export class TodoListComponent {
  @Input('todos') todos;

  constructor() {
  }

}
