import * as constants from '../constants';

export interface AddTodo {
  type: constants.ADD_TODO;
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

export function removeTodo(): RemoveTodo {
  return {
    type: constants.REMOVE_TODO
  };
}