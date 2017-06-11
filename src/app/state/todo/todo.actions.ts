import {Action} from '@ngrx/store';
import {type} from '../../utils';
import {ITodo} from "../../models";

export const ActionTypes = {
  SET_INSTALLED_STATUS: type('[todo] set installed status'),
  SET_TODOS: type('[todo] set todos'),
  ADD_TODO: type('[todo] add todo'),
  REMOVE_TODO: type('[todo] remove todo'),
  UPDATE_TODO: type('[todo] update todo')
};

export class SetInstalledTodosAction implements Action {
  type = ActionTypes.SET_INSTALLED_STATUS;
  constructor(public payload) {}
}

export class SetTodosAction implements Action {
  type = ActionTypes.SET_TODOS;
  constructor(public payload: ITodo[]) {}
}

export class AddTodoAction implements Action {
  type = ActionTypes.ADD_TODO;
  constructor(public payload: ITodo) {}
}

export class RemoveTodoAction implements Action {
  type = ActionTypes.REMOVE_TODO;
  constructor(public payload: string) {}
}

export class UpdateTodoStatusAction implements Action {
  type = ActionTypes.UPDATE_TODO;
  constructor(public payload) {}
}

export type Actions
  = SetInstalledTodosAction
  | SetTodosAction
  | AddTodoAction
  | RemoveTodoAction
  | UpdateTodoStatusAction;
