import { Provider } from 'mobx-react';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import store from "./store"
import registerServiceWorker from './registerServiceWorker';
ReactDOM.render(
  <Provider {...store}>
    <App />
  </Provider>
  ,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
