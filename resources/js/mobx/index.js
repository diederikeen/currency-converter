/* eslint-disable func-names */
import { observable } from 'mobx';
import FixerCall from '../helpers/calls/Fixer';


const AppState = observable({
  startCurrency: 'EUR',
  convertedCurrency: 'USD',
  amount: 9240,
  calculatedAmount: 0,
  convertToCrypto: false,
  dateRangeStart: new Date(),
  dateRangeEnd: new Date(),
});

AppState.setValuta = function (name, value) {
  this[name] = value;
};

AppState.getRate = function (cbSucces, cbError) {
  const params = {
    endpoint: 'latest',
    base: this.startCurrency,
    to: this.convertedCurrency,
  };

  FixerCall(params, cbSucces, cbError);
};

AppState.convert = function (rate) {
  this.calculatedAmount = Math.floor(rate * this.amount * 100) / 100;
};

export default AppState;
