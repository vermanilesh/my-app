import React, { Component } from 'react';
import './App.css';
import Header from './commen/Header.component.jsx';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Auth from './auth/Auth.jsx';
import TodoComponent from './todo/index.jsx';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <header>
            <Header/>
          </header>
          <Switch>
            <Route exact path="/" component={Auth} />
            <Route path="/todo" component={TodoComponent} />
            <Route path="/signin" component={Auth} />
            <Route path="/signup" component={Auth} />

          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
