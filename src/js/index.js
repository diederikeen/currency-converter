import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';

import App from './components/App';
import AppStore from './store';

const rootElement = document.getElementById('app');

ReactDOM.render(
  <Provider store={AppStore}>
    <App />
  </Provider>,
  rootElement,
);
