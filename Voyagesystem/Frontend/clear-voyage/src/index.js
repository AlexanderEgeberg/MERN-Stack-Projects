import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { BrowserRouter } from 'react-router-dom'
import App from './components/App';
import reducers from './reducers';


//thunk
const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
  //redux store og router
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);