import React, { Component } from 'react';
import './App.css';
import Header from './commen/Header.component.jsx';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Auth from './auth/Auth.jsx';
import { createStore } from 'redux';

import Footer from './todo/components/Footer.jsx';
import { AddTodo } from './todo/containers/AddTodo.jsx';
import VisibleTodoList from './todo/containers/VisibleTodoList.jsx';
import TodoComponent from './todo/index.jsx';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <header>
            <Header/>
          </header>
          <main>
            <Route exact path="/todo" component={TodoComponent} />
            <Route path="/signin" component={Auth} />
            <Route path="/signup" component={Auth} />

          </main>
        </div>
      </Router>
    );
  }
}

export default App;
