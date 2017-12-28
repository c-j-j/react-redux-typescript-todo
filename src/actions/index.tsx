import * as constants from '../constants';

export interface AddTodo {
  type: string;
  text: string;
}

export interface RemoveTodo {
  type: constants.REMOVE_TODO;
}

export type TodoAction = AddTodo | RemoveTodo;

export function addTodo(text: string): AddTodo {
  return {
    type: constants.ADD_TODO,
    text
  };
}

export function tryAddTodo(text: string): AddTodo {
  return {
    type: constants.TRY_ADD_TODO,
    text
  };
}

export function removeTodo(): RemoveTodo {
  return {
    type: constants.REMOVE_TODO
  };
}