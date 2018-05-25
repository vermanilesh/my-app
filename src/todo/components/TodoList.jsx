import React from 'react'
import { Todo } from './Todo.jsx';

export const TodoList = ({todos, onTodoClick}) => (
  <ul>
    {todos.map((todo, index) => (
      <Todo key={index} {...todo} onClick={() => onTodoClick(index)} />
    ))}
  </ul>
)