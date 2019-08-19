/* eslint-disable func-names */
import { observable } from 'mobx';
import { format, subDays, differenceInHours } from 'date-fns';
import { toJS } from 'mobx';

import FixerCall from '../helpers/calls/Fixer';

function calculateGrowth(historicRate, currentRate) {
  const percentageValue = currentRate - historicRate;
  return (percentageValue / historicRate) * 100;
}

const AppStore = observable({
  startCurrency: 'EUR',
  targetCurrency: 'USD',
  currentRate: 1.1015,
  historicRate: {
    growth: 0,
    value: 0,
  },
  amount: 1,
  targetAmount: 0,
  convertToCrypto: false,
  dateRangeStart: new Date(),
  dateRangeEnd: new Date(),
  currencies: {
    data: {},
  },
  isFetching: true,
  error: {
    bool: false,
    message: null,
  },
  rates: {
    lastFetched: Date.now(),
    rates: {},
  },
});

AppStore.onFetching = function (bool) {
  this.isFetching = bool;
};

AppStore.onError = function (error) {
  AppStore.error = true;
};

AppStore.fetchSymbols = function () {
  FixerCall({
    endpoint: 'symbols',
  }, this.fetchedSymbols, this.onError);

  this.convertRate();
  this.fetchData();
};

AppStore.fetchedSymbols = function ({ symbols }) {
  AppStore.currencies.data = symbols;
  AppStore.fetching = false;
};

AppStore.setAmount = function (value) {
  this.amount = value;
  this.convertRate();
};

AppStore.setCurrency = function (name, value) {
  this[name] = value;
  this.convertRate();
  this.setCurrentRate(this.rates.rates[this.targetCurrency]);
};

AppStore.convertRate = function () {
  this.targetAmount = parseFloat(Math.floor(this.currentRate * this.amount * 100) / 100).toFixed(2);
};

AppStore.fetchData = () => {
  Promise.all([
    AppStore.getCurrentRate(),
    AppStore.fetchHistoricalRate(),
  ]);
};

AppStore.getCurrentRate = function () {
  const params = {
    endpoint: 'latest',
    base: this.startCurrency,
    to: this.targetCurrency,
  };

  const currentRates = Object.keys(this.rates.rates);
  const lastFetched = differenceInHours(this.rates.lastFetched, Date.now());

  if (currentRates.length && lastFetched >= 1) {
    this.fetchedCurrentRates(this.rates.data);
  } else {
    FixerCall(params, this.fetchedCurrentRates, this.onError);
  }
};

AppStore.fetchedCurrentRates = function ({ rates }) {
  AppStore.rates.data = rates;
  AppStore.setCurrentRate(rates[AppStore.targetCurrency]);
};

AppStore.setCurrentRate = function (value) {
  this.currentRate = value;
  this.convertRate();
};

AppStore.fetchHistoricalRate = function (amountOfDays) {
  const params = {
    endpoint: format(subDays(Date.now(), amountOfDays || 30), 'YYYY-MM-DD'),
    base: this.startCurrency,
    symbols: this.targetCurrency,
  };
  FixerCall(params, this.fetchedHistoricalRates, this.error);
};

AppStore.fetchedHistoricalRates = function ({ rates }) {
  const rate = Object.values(rates)[0];
  AppStore.historicRate.amount = rate;
  AppStore.historicRate.growth = calculateGrowth(rate, AppStore.currentRate);
};

export default AppStore;
