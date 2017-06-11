import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs/BehaviorSubject";

interface ITodo {
  id: string;
  title: string;
  done: boolean;
  editMode: boolean;
}

@Injectable()
export class TodoService {
  public isInit: BehaviorSubject<boolean> = new BehaviorSubject(false);
  private data;
  public todos: BehaviorSubject<ITodo[]> = new BehaviorSubject([]);

  constructor() {
    this.isInit.next(!!localStorage.getItem('todo-redux'));
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
    this.isInit.next(true);
    this.loadData();
  }

  loadData() {
    if (localStorage.getItem('todo-redux')) {
      const data = JSON.parse(localStorage.getItem('todo-redux'));
      this.data = data;
      // slice copying the array in order to pass by value and not by reference
      this.todos.next(data.slice());
    }
  }

  saveChanges() {
    localStorage.setItem('todo-redux', JSON.stringify(this.data));
    this.todos.next(this.data.slice());
  }

  addTodo(data) {
    this.data.push(<ITodo> {
      id: this.guid(),
      title: data.title,
      done: false,
      editMode: false
    });
    this.saveChanges();
  }

  removeTodo(id) {
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i].id == id) {
        this.data.splice(i, 1);
        break;
      }
    }
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
