import * as React from 'react';
import { shallow } from 'enzyme';
import { Presentation } from '../presentation';
import * as renderer from 'react-test-renderer';

describe('TodoInput', () => {
  const addTodoSpy = jest.fn();

  it('adds an item', () => {
    const wrapper = shallow(<Presentation addTodo={addTodoSpy}/>);
    wrapper.find('input[type="text"]').simulate('change', {target: {value: 'foo'}});
    wrapper.find('form').simulate('submit', { preventDefault: () => {} });

    expect(addTodoSpy.mock.calls.length).toBe(1);
  });

  it('matches snapshot', () => {
    const wrapper = renderer.create(<Presentation addTodo={addTodoSpy}/>).toJSON();

    expect(wrapper).toMatchSnapshot();
  });
});