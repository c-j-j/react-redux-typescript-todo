import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { applyMiddleware, createStore } from 'redux';
import { StoreState } from './types';
import todoItems from './reducers';
import { Provider } from 'react-redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import todoSaga from './TodoApp/sagas';

const sagaMiddleware = createSagaMiddleware()
const store = createStore<StoreState>(todoItems, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(todoSaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);