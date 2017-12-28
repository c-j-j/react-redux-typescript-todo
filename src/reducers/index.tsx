import { TodoAction } from '../actions';
import { StoreState } from '../types';
import { ADD_TODO } from '../constants';

const intialState: StoreState = {
  items: []
};

export default function items(state: StoreState = intialState, action: TodoAction): StoreState {
  switch (action.type) {
    case ADD_TODO:
      return {...state, items: state.items.concat(action.text)};
    default:
      return state;
  }
}