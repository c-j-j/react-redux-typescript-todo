import * as React from 'react';
import { shallow } from 'enzyme';
import { Presentation } from '../presentation';

describe('TodoInput', () => {
  it('adds an item', () => {
    const addTodoSpy = jest.fn();
    const wrapper = shallow(<Presentation addTodo={addTodoSpy}/>);
    wrapper.find('input[type="text"]').simulate('change', {target: {value: 'foo'}});
    wrapper.find('form').simulate('submit', { preventDefault: () => {} });

    expect(addTodoSpy.mock.calls.length).toBe(1);
  });
});