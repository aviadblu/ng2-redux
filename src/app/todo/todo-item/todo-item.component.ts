import {Component, Input} from '@angular/core';
import {TodoService} from "../todo.service";

@Component({
  selector: 'app-todo-item',
  template: `
    <li>
      <div class="view" [style.display]="(data.editMode ? 'none' : 'block')" >
        <input class="toggle" type="checkbox" [checked]="data.done"
               (change)="toggleDone()">
        <label>{{data.title}}</label>
        <button class="destroy" (click)="remove()"></button>
      </div>
      <input [style.display]="(data.editMode ? 'block' : 'none')" class="edit">
    </li>
  `
})
export class TodoItemComponent {
  @Input('data') data;

  constructor(private todoSvc: TodoService) {
  }

  toggleDone() {
    this.data.done = !this.data.done;
    this.updateItem();
  }

  updateItem() {
    this.todoSvc.saveChanges();
  }

  remove() {
    this.todoSvc.removeTodo(this.data.id);
  }

}
