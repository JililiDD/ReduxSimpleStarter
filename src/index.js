import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

//S5T55: after installing redux-promise package using "npm install --save redux-promise", import the package here
//redux-promise is a popular middleware package.
//middeware is the functions that can manipulate the result of an action before pass it through all the reducers
import ReduxPromise from 'redux-promise';

import App from './components/app';
import reducers from './reducers';

//S5T55: hook the ReduxPromise here
const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
  , document.querySelector('.container'));
