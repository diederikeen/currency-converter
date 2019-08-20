import 'babel-polyfill';
import React, { useContext, useEffect } from 'react';
import { observer } from 'mobx-react-lite';

import AppStore from './store';
import Index from './modules/index';
import './App.css';

const App = observer(() => {
  const store = useContext(AppStore);
  useEffect(() => {
    store.initApp();
  }, []);

  return (
    <Index />
  );
});

export default App;
