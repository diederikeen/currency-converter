import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';

import App from './App.jsx';
import AppStore from './store';

const rootElement = document.getElementById('app');

ReactDOM.render(
  <Provider store={AppStore}>
    <App />
  </Provider>,
  rootElement,
);
