import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';
import registerServiceWorker from './registerServiceWorker';

import todoReducer from './todo/todoReducer.jsx';
import visibilityFilterReducer from './todo/visibilityFilterReducer.jsx';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

export const appReducers = combineReducers({
  todoReducer,
  visibilityFilterReducer
})

const store = createStore(appReducers);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
