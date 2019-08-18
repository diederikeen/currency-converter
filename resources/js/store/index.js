/* eslint-disable func-names */
import { observable } from 'mobx';
import FixerCall from '../helpers/calls/Fixer';

const AppStore = observable({
  startCurrency: 'EUR',
  targetCurrency: 'USD',
  amount: 1,
  targetAmount: 0,
  convertToCrypto: false,
  dateRangeStart: new Date(),
  dateRangeEnd: new Date(),
});

AppStore.setValuta = function (name, value) {
  this[name] = value;
};

AppStore.setAmount = function (value) {
  this.amount = value;
};

AppStore.getRate = function (cbSucces, cbError) {
  const params = {
    endpoint: 'latest',
    base: this.startCurrency,
    to: this.targetCurrency,
  };

  FixerCall(params, cbSucces, cbError);
};

AppStore.convert = function (rate) {
  this.targetAmount = parseFloat(Math.floor(rate * this.amount * 100) / 100).toFixed(2);
};

export default AppStore;
