import * as React from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';
import './styles.css';

export default function TodoApp() {
  return (
    <section className="TodoApp">
      <TodoInput />
      <TodoList />
    </section>
  );
};