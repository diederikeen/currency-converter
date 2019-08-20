import React from 'react';
import PropTypes from 'prop-types';

import Select from './currencySelect';
import './converter.css';

const Converter = ({
  store,
  onHandleInputChange,
  onHandleSelectChange,
  options,
  isFetching,
  error,
}) => {
  function handleSelectChange({ target }) {
    onHandleSelectChange(target.name, target.value);
  }

  function handleInputChange({ target }) {
    onHandleInputChange(parseInt(target.value, 10));
  }

  return (
      <>
      {!isFetching
        ? <div className="e-select-wrap">

            {error.bool
              && <div className="e-select-wrap__error">
                  <p className="warning">Sorry, something went wrong for fetching data</p>
                </div>
            }

            <div className="e-select-wrap__col">
              <input
                type="number"
                name="amount"
                min="1"
                onChange={handleInputChange}
                placeholder={store.amount}
              />
              <Select
                name="baseCurrency"
                value={store.baseCurrency}
                onChange={handleSelectChange}
                options={options}
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
                onChange={handleSelectChange}
                options={options}
              />
            </div>
          </div>
        : ''}
      </>
  );
};

Converter.propTypes = {
  store: PropTypes.shape({
    baseCurrency: PropTypes.string.isRequired,
    targetCurrency: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    targetAmount: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
  }),
  onHandleInputChange: PropTypes.func.isRequired,
  onHandleSelectChange: PropTypes.func.isRequired,
  options: PropTypes.object.isRequired,
  error: PropTypes.object.isRequired,
  isFetching: PropTypes.bool.isRequired,
};

export default Converter;
