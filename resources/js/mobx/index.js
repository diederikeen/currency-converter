import { observable } from 'mobx';

const AppState = observable({
  startCurrency: 'EU',
  convertedCurrency: 'USD',
  amount: 0,
  convertToCrypto: false,
});

export default AppState;
