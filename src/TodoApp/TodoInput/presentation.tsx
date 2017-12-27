import * as React from 'react';
import { ChangeEvent, FormEvent } from 'react';
import { AddTodo } from '../../actions';

export interface Props {
  addTodo: (text: string) => AddTodo;
}

interface State {
  currentItem: string;
}

export class Presentation extends React.Component<Props, State> {
  componentWillMount() {
    this.setState({
      currentItem: ''
    });
  }

  addTodoItem(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    this.props.addTodo(this.state.currentItem);
  }

  appendToCurrentItem(event: ChangeEvent<HTMLInputElement>) {
    this.setState({currentItem: event.target.value});
  }

  render() {
    return (
      <form onSubmit={(e) => this.addTodoItem(e)}>
        <input type="text" placeholder="Enter todo item" onChange={(e) => this.appendToCurrentItem(e)} />
      </form>
    );
  }
}