import 'babel-polyfill';
import React, { Component } from 'react';
import { observer } from 'mobx-react';
import PropTypes from 'prop-types';

// eslint-disable-next-line no-unused-vars
import styles from './App.css';
import Select from './helpers/CurrencySelect.jsx';

@observer class App extends Component {
  constructor(props) {
    super(props);

    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleSucces = this.handleSucces.bind(this);
  }

  handleSucces({ rates }) {
    const rate = rates[this.props.store.convertedCurrency];
    this.props.store.convert(rate);
  }

  handleError(err) {
    /* Handle error */
  }

  handleOnChange({ target }) {
    this.props.store.setValuta(target.name, target.value);
    this.props.store.getRate(this.handleSucces, this.handleError);
  }

  render() {
    const { store: { amount } } = this.props;

    return (
      <div className="e-container">
        <h1>Currency converter</h1>

        <Select
          name="startCurrency"
          defaultValue={this.props.store.startCurrency}
          onChange={this.handleOnChange}
        />
        <Select
          name="convertedCurrency"
          defaultValue={this.props.store.convertedCurrency}
          onChange={this.handleOnChange}
        />
        <div>
          {amount} in
           {this.props.store.startCurrency} is 
           {this.props.store.calculatedAmount} in 
           {this.props.store.convertedCurrency}
        </div>

      </div>
    );
  }
}

App.propTypes = {
  store: PropTypes.shape({
    amount: PropTypes.number.isRequired,
    convertToCrypto: PropTypes.bool.isRequired,
    convertedCurrency: PropTypes.string.isRequired,
    startCurrency: PropTypes.string.isRequired,
    calculatedAmount: PropTypes.number.isRequired,
    getRate: PropTypes.func.isRequired,
    setValuta: PropTypes.func.isRequired,
    convert: PropTypes.func.isRequired,
  }),
};

export default App;
