import React, { Component } from 'react';
import { inject, observer } from "mobx-react";
import PropTypes from 'prop-types';

import Select from '../../helpers/CurrencySelect.jsx';

@inject('store')
@observer
class Converter extends Component {
  constructor() {
    super();

    this.state = {
      error: {
        bool: false,
        errorMessage: '',
      },
    };

    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.handleSucces = this.handleSucces.bind(this);
    this.handleError = this.handleError.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  componentDidMount() {
    this.props.store.setValuta(this.props.store.startCurrency, this.props.store.amount);
    this.props.store.getRate(this.handleSucces, this.handleError);
  }

  handleSucces({ rates }) {
    const rate = rates[this.props.store.targetCurrency];
    this.props.store.convert(rate);
  }

  handleError(error) {
    /* Handle error */
    if (error.code === 105) {
      this.setState({
        error: {
          bool: true,
          errorMessage: `Sorry no data available for ${this.props.store.startCurrency} to ${this.props.store.targetCurrency}`,
        },
      });
    }
  }

  handleSelectChange({ target }) {
    this.props.store.setValuta(target.name, target.value);
    this.props.store.getRate(this.handleSucces, this.handleError);
  }

  handleInputChange({ target }) {
    this.props.store.setAmount(target.value);
    this.props.store.getRate(this.handleSucces, this.handleError);
  }

  render() {
    const { store } = this.props;
    return (
      <>
        {this.state.error.bool
          && <p className="warning">{this.state.error.errorMessage}</p>}

        <div className="e-select-wrap">
          <div className="e-select-wrap__col">
            <input
              type="number"
              name="amount"
              onChange={this.handleInputChange}
              placeholder={store.amount}
            />
            <Select
              name="startCurrency"
              value={store.startCurrency}
              onChange={this.handleSelectChange}
            />
          </div>
          <p>— to —</p>
          <div className="e-select-wrap__col">
            <input
              type="text"
              name="amount"
              readOnly
              onChange={this.handleInputChange}
              placeholder={store.targetAmount}
            />
            <Select
              name="targetCurrency"
              value={store.targetCurrency}
              onChange={this.handleSelectChange}
            />
          </div>
        </div>
      </>
    );
  }
}

Converter.propTypes = {
  store: PropTypes.shape({
    amount: PropTypes.number.isRequired,
    convertToCrypto: PropTypes.bool.isRequired,
    targetCurrency: PropTypes.string.isRequired,
    startCurrency: PropTypes.string.isRequired,
    targetAmount: PropTypes.number.isRequired,
    getRate: PropTypes.func.isRequired,
    setValuta: PropTypes.func.isRequired,
    convert: PropTypes.func.isRequired,
    setAmount: PropTypes.func.isRequired,
  }),
};


export default Converter;
