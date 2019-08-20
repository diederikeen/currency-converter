import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { toJS } from 'mobx';
import PropTypes from 'prop-types';

import './Tendency.css';

const Tendency = ({ historicRate, converter, error }) => (
  <>
    {historicRate.growth

      ? <section className={`m-tendency ${historicRate.growth > 1 ? 'm-tendency--succes' : 'm-tendency--warning'}`}>
          <h3 className="m-tendency__title">Course {converter.baseCurrency} / {converter.targetCurrency} over 30 days</h3>
          <span className="m-tendency__current-rate">{historicRate.amount} / <span>{converter.currentRate.toFixed(4)}</span></span>

          <span className="m-tendency__total-growth">
            ({historicRate.growth.toFixed(4)}%)
          </span>
        </section>

      : <section className={`m-tendency ${historicRate.growth > 1 ? 'm-tendency--succes' : 'm-tendency--warning'}`}>
          <h3 className="m-tendency__title">Course {converter.baseCurrency} / {converter.targetCurrency} over 30 days</h3>
          <p>{error ? 'Something went wrong' : 'Retrieving data'}</p>
        </section>
    }
  </>
);

Tendency.defaultProps = {
  historicRate: {
    amount: 0,
    growth: 0,
  },
};

Tendency.propTypes = {
  historicRate: PropTypes.shape({
    amount: PropTypes.number,
    growth: PropTypes.number,
  }),
  converter: PropTypes.shape({
    baseCurrency: PropTypes.string,
    targetCurrency: PropTypes.string,
  }),
  error: PropTypes.shape({
    bool: PropTypes.bool.isRequired,
    message: PropTypes.string,
  }),
};

export default Tendency;
