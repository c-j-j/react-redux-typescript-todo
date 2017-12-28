import * as React from 'react';
import { shallow } from 'enzyme';
import TodoList from '../index';
import configureMockStore, { MockStore } from 'redux-mock-store';
import { StoreState } from '../../../types';

describe('TodoInput Container Test', () => {
  let store: MockStore<StoreState>;
  const state: StoreState = {
    items: ['item one']
  };

  beforeEach(() => {
    store = configureMockStore<StoreState>()(state);
  });

  it('adds an item', () => {
    const wrapper = shallow(<TodoList />, { context: { store }});
    const items = wrapper.prop('items');

    expect(items[0]).toEqual('item one');
  });
});