import todoItems from '../index';
import * as actions from '../../actions';

describe('Todo Reducer', () => {
  it('adds an item', () => {
    const {items} = todoItems(undefined, actions.addTodo('item'));

    expect(items).toEqual(['item']);
  });
});