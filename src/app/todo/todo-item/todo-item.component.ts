import {Component, Input} from '@angular/core';
import {TodoService} from "../todo.service";

@Component({
  selector: 'app-todo-item',
  template: `
    <li>
      <div class="view" [style.display]="(todo.editMode ? 'none' : 'block')">
        <input class="toggle" type="checkbox" [checked]="todo.done"
               (change)="toggleDone()">
        <label>{{todo.title}}</label>
        <button class="destroy" (click)="remove()"></button>
      </div>
      <input [style.display]="(todo.editMode ? 'block' : 'none')" class="edit">
    </li>
  `
})
export class TodoItemComponent {
  public todo;
  private _data;
  @Input('data')
  set data(value) {
    this.todo = Object.assign({}, value);
    this._data = value;
  }

  constructor(private todoSvc: TodoService) {
  }

  toggleDone() {
    this.todo.done = !this.todo.done;
    this.todoSvc.updateTodo(this.todo);
  }

  remove() {
    this.todoSvc.removeTodo(this.todo.id);
  }

}
