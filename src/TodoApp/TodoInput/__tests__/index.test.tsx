import * as React from 'react';
import { shallow } from 'enzyme';
import TodoInput from '../index';
import configureMockStore, { MockStore } from 'redux-mock-store';
import { StoreState } from '../../../types';
import { addTodo } from '../../../actions';

describe('TodoInput Container Test', () => {
  let store: MockStore<StoreState>;

  beforeEach(() => {
    store = configureMockStore<StoreState>()();
  });

  it('adds an item', () => {
    const wrapper = shallow(<TodoInput />, { context: { store }});

    wrapper.prop('addTodo')('item');
    const actions = store.getActions();

    expect(actions[0]).toEqual(addTodo('item'));
  });
});