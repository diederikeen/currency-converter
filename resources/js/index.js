import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AppState from './mobx';

const rootElement = document.getElementById('app');

ReactDOM.render(
  <App store={AppState} />,
  rootElement,
);
