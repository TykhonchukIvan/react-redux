import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import App from './App';
import {createStore, applyMiddleware} from 'redux';
import rootReducer from './components/reduxTheory/redux/rootReducer';
import {Provider} from 'react-redux'
import reduxThunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';

// function loggerMiddleware(store) {
//   return function (next) {
//     return function (action) {
//       const result = next(action)
//       console.log('Middleware', store.getState())
//       return result
//     }
//   }
// }

const loggerMiddleware = store => next => action => {
  const result = next(action)
  console.log('Middleware', store.getState())
  return result
}

// const application =
//   <BrowserRouter>
//     <App/>
//   </BrowserRouter>

const store = createStore(rootReducer,
  composeWithDevTools(applyMiddleware(loggerMiddleware, reduxThunk)))

const app = (
  <Provider store={store}>
    <App/>
  </Provider>
)

ReactDOM.render(app, document.querySelector('#root'));