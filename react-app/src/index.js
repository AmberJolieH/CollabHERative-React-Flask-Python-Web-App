import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as sessionActions from './store/session';
import * as showcaseActions from './store/showcase';
import { Provider } from 'react-redux';
import configureStore from './store';


const store = configureStore();

if (process.env.NODE_ENV !== 'production') {

  window.store = store;
  window.sessionActions = sessionActions;
  window.showcaseActions = showcaseActions;
}

if (process.env.NODE_ENV !== "production") {
  window.store = store;
}
ReactDOM.render(
  <React.StrictMode>
  <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
