import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';
import registerServiceWorker from './registerServiceWorker';

import todoReducer from './todo/todoReducer.jsx';
import visibilityFilterReducer from './todo/visibilityFilterReducer.jsx';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';

import { authMiddleware } from './auth/auth.middleware.jsx';
import { authReducer } from './auth/auth.reducer.jsx';

export const appReducers = combineReducers({
  todoReducer,
  visibilityFilterReducer,
  authReducer
})

const store = createStore(appReducers, applyMiddleware(authMiddleware));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
