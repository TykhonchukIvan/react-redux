import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux'
import createSagaMiddleware from 'redux-saga';
import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import rootReducer from './redux'
import rootSaga from './redux/sagas'
import App from "./App";

function loggerMiddleware(store) {
  return function (next) {
    return function (action) {
      const result = next(action)
      console.log('Middleware', store.getState())
      return result
    }
  }
}

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware, loggerMiddleware)))
sagaMiddleware.run(rootSaga);

const application = (
  <Provider store={store}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>
)


ReactDOM.render(application, document.getElementById('root'));