import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';

//Middlewares
import { authMiddleware } from './auth/auth.middleware.jsx';

//Reducers
import todoReducer from './todo/todoReducer.jsx';
import visibilityFilterReducer from './todo/visibilityFilterReducer.jsx';
import { authReducer } from './auth/auth.reducer.jsx';
import { searchReducer } from './search/search.reducer.jsx';

export const appReducers = combineReducers({
  todoReducer,
  visibilityFilterReducer,
  authReducer,
  searchReducer
})

const store = createStore(appReducers, applyMiddleware(authMiddleware));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
