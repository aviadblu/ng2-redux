import * as userActions from './todo.actions';
import {ITodoVM} from "../../models/todo.model";

export interface State extends ITodoVM {
}

const initialState: State = <ITodoVM>{
  installed: false,
  data: []
};

export function reducer(state = initialState, action: userActions.Actions): State {
  let tmpData;
  switch (action.type) {
    case userActions.ActionTypes.SET_INSTALLED_STATUS:
      return {
        installed: action.payload,
        data: state.data
      };

    case userActions.ActionTypes.SET_TODOS:
      return {
        installed: state.installed,
        data: action.payload
      };

    case userActions.ActionTypes.ADD_TODO:
      tmpData = state.data.slice();
      tmpData.push(action.payload);
      return {
        installed: state.installed,
        data: tmpData
      };

    case userActions.ActionTypes.REMOVE_TODO:
      tmpData = state.data.slice();
      for (let i = 0; i < tmpData.length; i++) {
        if (tmpData[i].id == action.payload) {
          tmpData.splice(i, 1);
          break;
        }
      }
      return {
        installed: state.installed,
        data: tmpData
      };

    case userActions.ActionTypes.UPDATE_TODO:
      tmpData = state.data.slice();
      for (let i = 0; i < tmpData.length; i++) {
        if (tmpData[i].id == action.payload.id) {
          tmpData[i] = action.payload;
          break;
        }
      }
      return {
        installed: state.installed,
        data: tmpData
      };

    default:
      return state;
  }
}
