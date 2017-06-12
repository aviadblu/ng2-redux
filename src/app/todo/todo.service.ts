import {Injectable} from '@angular/core';
import {Store} from "@ngrx/store";
import {ITodo} from "../models/todo.model";

import * as appState from '../app.state';
import * as todoActions from '../state/todo/todo.actions';

@Injectable()
export class TodoService {

  constructor(private store: Store<appState.State>) {
    this.store.dispatch(new todoActions.SetInstalledTodosAction(!!localStorage.getItem('todo-redux')));
    this.loadData();
  }

  install() {
    const initData = [
      {id: this.guid(), title: 'Todo 1', done: false, editMode: false},
      {id: this.guid(), title: 'Todo 2', done: false, editMode: false},
      {id: this.guid(), title: 'Todo 3', done: false, editMode: false},
      {id: this.guid(), title: 'Todo 4', done: false, editMode: false}
    ];
    localStorage.setItem('todo-redux', JSON.stringify(initData));
    this.store.dispatch(new todoActions.SetInstalledTodosAction(true));
    this.loadData();
  }

  loadData() {
    if (localStorage.getItem('todo-redux')) {
      this.store.dispatch(new todoActions.SetTodosAction(JSON.parse(localStorage.getItem('todo-redux'))));
    }
  }

  saveChanges() {
    // update local storage
    this.store.select(state => state.todo.data).subscribe(data => {
      localStorage.setItem('todo-redux', JSON.stringify(data));
    });
  }

  addTodo(data) {
    this.store.dispatch(new todoActions.AddTodoAction(<ITodo> {
      id: this.guid(),
      title: data.title,
      done: false,
      editMode: false
    }));
    this.saveChanges();
  }

  removeTodo(id) {
    this.store.dispatch(new todoActions.RemoveTodoAction(id));
    this.saveChanges();
  }

  updateTodo(data) {
    this.store.dispatch(new todoActions.UpdateTodoStatusAction(data));
    this.saveChanges();
  }

  guid() {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }

    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
      s4() + '-' + s4() + s4() + s4();
  }

}
