import * as React from 'react';
import { shallow } from 'enzyme';
import TodoInput from '../index';
import configureMockStore, { MockStore } from 'redux-mock-store';
import { StoreState } from '../../../types';
import { tryAddTodo } from '../../../actions';

describe('TodoInput Container Test', () => {
  let store: MockStore<StoreState>;

  beforeEach(() => {
    store = configureMockStore<StoreState>()();
  });

  it('adds an item by invoking the prop passed to presentation', () => {
    const wrapper = shallow(<TodoInput />, { context: { store }});

    wrapper.prop('addTodo')('item');
    const actions = store.getActions();

    expect(actions[0]).toEqual(tryAddTodo('item'));
  });

  it('adds an item to actions when form is submitted', () => {
    const wrapper = shallow(<TodoInput />, { context: { store }});
    const form = wrapper.dive();
    form.find('form > input').simulate('change', {target: {value: 'item'}});
    form.find('form').simulate('submit', {preventDefault: () => {}});
    const actions = store.getActions();

    expect(actions[0]).toEqual(tryAddTodo('item'));
  });

  it('matches snapshot', () => {
    const wrapper = shallow(<TodoInput />, { context: { store }});

    expect(wrapper.dive().html()).toMatchSnapshot();
  });
});