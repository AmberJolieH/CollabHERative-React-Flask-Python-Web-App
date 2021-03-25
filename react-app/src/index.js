import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as sessionActions from './store/session';
import * as showcaseActions from './store/showcase';
import { Provider } from 'react-redux';
import configureStore from './store';
import ModalProvider from "./context/modal"
import OtherUserProvider from "./context/otherUser"


  const initialState = {
    burgerMenu: {
      primary: {
        isOpen: true
      },
      secondary: {
        isOpen: false
      }
    }
  };

const store = configureStore(initialState);

if (process.env.NODE_ENV !== 'production') {

  window.store = store;
  window.sessionActions = sessionActions;
  window.showcaseActions = showcaseActions;
}

ReactDOM.render(
  <React.StrictMode>
  <Provider store={store}>
    <ModalProvider>
      <OtherUserProvider>
          <App />
      </OtherUserProvider>
      </ModalProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
