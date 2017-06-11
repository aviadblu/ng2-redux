import {Component} from '@angular/core';
import {TodoService} from "../todo.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-todo-main',
  template: `
    <div class="first-time-installation" *ngIf="!(installed | async)">
      <button (click)="install()">Install</button>
    </div>
    <section class="todoapp" *ngIf="(installed | async)">

      <header class="header">
        <h1>todos</h1>
        <form [formGroup]="newTodoForm" (ngSubmit)="sendForm()" novalidate>
          <input class="new-todo"
                 placeholder="What needs to be done?"
                 formControlName="title"
                 autofocus>
        </form>


      </header>

      <section class="main">
        <input class="toggle-all" type="checkbox">
        <app-todo-list [todos]="todos | async"></app-todo-list>
      </section>

      <footer class="footer">
        <span class="todo-count"><strong>{{todosLeft}}</strong> items left</span>
        <button class="clear-completed">Clear completed</button>
      </footer>

    </section>
  `
})
export class TodoMainComponent {
  public installed;
  public todos;
  public newTodoForm: FormGroup;
  public todosLeft: number = 0;

  constructor(private todoSvc: TodoService,
              private formBuilder: FormBuilder) {
    this.installed = todoSvc.isInit;
    this.todos = todoSvc.todos;
    this.createForm();

    this.todoSvc.todos.subscribe(data => {
      this.todosLeft = 0;
      data.forEach(item => {
        if (!item.done) {
          this.todosLeft++;
        }
      });
    });
  }

  private createForm() {
    this.newTodoForm = this.formBuilder.group({
      title: ['', Validators.required]
    });
  }

  sendForm() {
    if (this.newTodoForm.status === 'VALID') {
      this.todoSvc.addTodo(this.newTodoForm.value)
      this.createForm();
    }
  }

  install() {
    this.todoSvc.install();
  }

}
