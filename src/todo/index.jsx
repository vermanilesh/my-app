import React from 'react'
import { Footer } from './components/Footer.jsx'
import AddTodo from './containers/AddTodo.jsx';
import VisibleTodoList from './containers/VisibleTodoList.jsx';

const TodoComponent = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
)

export default TodoComponent