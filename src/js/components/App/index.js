import 'babel-polyfill';
import React, { useContext, useEffect } from 'react';
import { observer } from 'mobx-react-lite';

import AppStore from '../../store';
import Home from '../Home';
import './index.css';

const App = observer(() => {
  const store = useContext(AppStore);
  useEffect(() => {
    store.initApp();
  }, []);

  return (
    <Home />
  );
});

export default App;
