import React, { Component } from 'react';
import './App.css';
import Header from './commen/Header.component.jsx';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Auth from './auth/Auth.jsx';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <header>
            <Header/>
          </header>
          <main>
            <Route exact path="/" />
            <Route path="/signin" component={Auth} />
            <Route path="/signup" component={Auth} />
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
