import { AddTodo, TodoAction } from '../actions';
import { StoreState } from '../types';
import { ADD_TODO } from '../constants';

const intialState: StoreState = {
  items: []
};

export default function items(state: StoreState = intialState, action: TodoAction): StoreState {
  switch (action.type) {
    case ADD_TODO:
      const todoItem = action as AddTodo;
      return {...state, items: state.items.concat(todoItem.text)};
    default:
      return state;
  }
}