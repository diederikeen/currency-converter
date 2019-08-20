import { createContext } from 'react';
import { format, subDays, differenceInHours } from 'date-fns';
import { decorate, observable } from 'mobx';
import FixerCall from '../helpers/calls/Fixer';

function calculateGrowth(historicRate, currentRate) {
  const percentageValue = currentRate - historicRate;
  return (percentageValue / historicRate) * 100;
}

export class AppState {
  state = {
    error: {
      bool: false,
      message: null,
    },
    isFetching: true,
  }

  crypto = {
    bool: false,
  }

  converter = {
    baseCurrency: 'EUR',
    targetCurrency: 'USD',
    currentRate: 1.1015,
    amount: 1,
    targetAmount: 0,
  }

  timeRange = {
    dateRangeStart: new Date(),
    dateRangeEnd: new Date(),
  }

  historicRate = {
    growth: 0,
    value: 0,
  };

  rates = {
    lastFetched: Date.now(),
    data: {},
  };

  symbols = {};

  initApp = () => {
    Promise.all([
      this.fetchSymbols(),
      this.fetchHistoricalRate(),
      this.getCurrentRate(),
    ]);
    this.convertRate();
    this.state.isFetching = false;
  };

  onError = (error) => {
    console.error(error);
    this.state.error = {
      bool: true,
      message: error.message,
    };
  };

  // fetchSymbols
  fetchSymbols = () => {
    FixerCall({
      endpoint: 'symbols',
    }, this.fetchedSymbols, this.onError);
  }

  // populate symbols (currencies)
  fetchedSymbols = (data) => {
    this.symbols = data.symbols;
  };

  getCurrentRate = () => {
    const params = {
      endpoint: 'latest',
      base: this.converter.baseCurrency,
      to: this.converter.targetCurrency,
    };

    const currentRates = Object.keys(this.rates.data);
    const lastFetched = differenceInHours(this.rates.lastFetched, Date.now());

    if (currentRates.length > 0 && lastFetched <= 1) {
      this.fetchedCurrentRates({ rates: this.rates.data });
    } else {
      FixerCall(params, this.fetchedCurrentRates, this.onError);
    }
  }

  fetchedCurrentRates = ({ rates }) => {
    this.rates.data = rates;
    this.setCurrentRate(rates[this.converter.targetCurrency]);
  };

  setCurrentRate = (value) => {
    this.converter.currentRate = value;
    this.convertRate();
  }

  setAmount = (value) => {
    this.converter.amount = value;
    this.convertRate();
  };

  convertRate = () => {
    this.converter.targetAmount = parseFloat(Math.floor(this.converter.currentRate * this.converter.amount * 100) / 100).toFixed(2);
  }

  setCurrency = (name, value) => {
    this.converter[name] = value;
    this.setCurrentRate(this.rates.data[this.converter.targetCurrency]);
  };

  fetchHistoricalRate = (amountOfDays) => {
    const params = {
      endpoint: format(subDays(Date.now(), amountOfDays || 30), 'YYYY-MM-DD'),
      base: this.converter.baseCurrency,
      symbols: this.converter.targetCurrency,
    };
    FixerCall(params, this.fetchedHistoricalRates, this.onError);
  }

  fetchedHistoricalRates = ({ rates }) => {
    const rate = Object.values(rates)[0];
    this.historicRate.amount = rate;
    this.historicRate.growth = calculateGrowth(rate, this.converter.currentRate);
  }
}

decorate(AppState, {
  state: observable,
  crypto: observable,
  converter: observable,
  timeRange: observable,
  historicRate: observable,
  rates: observable,
  symbols: observable,
});

export default createContext(new AppState());
