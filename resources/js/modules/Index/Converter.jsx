import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { toJS } from 'mobx';
import PropTypes from 'prop-types';

import Select from '../../helpers/CurrencySelect.jsx';

@inject('store')
@observer
class Converter extends Component {
  constructor() {
    super();

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
  }

  handleSelectChange({ target }) {
    const { store } = this.props;
    const { name, value } = target;
    store.setCurrency(name, value);
    store.fetchData();
  }

  handleInputChange({ target }) {
    const { store } = this.props;
    store.setAmount(target.value);
  }


  render() {
    const { store } = this.props;

    return (
      <>
        {!store.currencies.fetching
          ? <div className="e-select-wrap">
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
                  options={store.currencies.data}
                />
              </div>
              <p>— to —</p>
              <div className="e-select-wrap__col">
                <input
                  type="text"
                  name="amount"
                  readOnly
                  placeholder={store.targetAmount}
                />
                <Select
                  name="targetCurrency"
                  value={store.targetCurrency}
                  onChange={this.handleSelectChange}
                  options={store.currencies.data}
                />
              </div>
            </div>

          : <div className="e-select-wrap"><p>Fetching data</p></div>
        }
      </>
    );
  }
}

Converter.propTypes = {
  store: PropTypes.shape({
    amount: PropTypes.number.isRequired,
    targetAmount: PropTypes.number.isRequired,
    startCurrency: PropTypes.string.isRequired,
    targetCurrency: PropTypes.string.isRequired,
    setAmount: PropTypes.func.isRequired,
    setCurrency: PropTypes.func.isRequired,
    fetchData: PropTypes.func.isRequired,
    currencies: PropTypes.shape({
      fetching: PropTypes.bool.isRequired,
      data: PropTypes.object.isRequired,
    }),
  }),
};


export default Converter;
