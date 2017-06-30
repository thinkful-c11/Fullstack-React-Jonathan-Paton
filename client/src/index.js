import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import CheeseList from './components/cheese-list';
import { createStore, applyMiddleware } from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import reducer from './reducers/cheese';

const store = createStore(reducer, applyMiddleware(thunk));


ReactDOM.render(
  <Provider store={store}>
   <CheeseList />
  </Provider>,
  document.getElementById('root')
);
