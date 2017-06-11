import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TodoMainComponent} from './todo-main/todo-main.component';
import {TodoItemComponent} from './todo-item/todo-item.component';
import {TodoListComponent} from './todo-list/todo-list.component';
import {TodoService} from "./todo.service";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [TodoMainComponent, TodoItemComponent, TodoListComponent],
  exports: [TodoMainComponent],
  providers: [TodoService]
})
export class TodoModule {
}
