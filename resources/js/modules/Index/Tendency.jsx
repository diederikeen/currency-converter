import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import PropTypes from 'prop-types';

// eslint-disable-next-line no-unused-vars
import style from './Tendency.css';

@inject('store')
@observer
class Tendency extends Component {
  render() {
    const { store } = this.props;
    return (
      <>
        {store.historicRate.growth && store.currentRate

          ? <section className={`m-tendency ${store.historicRate.growth > 1 ? 'm-tendency--succes' : 'm-tendency--warning'}`}>
              <h3 className="m-tendency__title">Course {store.startCurrency} / {store.targetCurrency} over 30 days</h3>
              <span className="m-tendency__current-rate">{store.historicRate.amount} / <span>{store.currentRate.toFixed(4)}</span></span>

              <span className="m-tendency__total-growth">
                ({store.historicRate.growth.toFixed(4)}%)
              </span>
            </section>

          : <section className={`m-tendency ${store.historicRate.growth > 1 ? 'm-tendency--succes' : 'm-tendency--warning'}`}>
              <h3 className="m-tendency__title">Course {store.startCurrency} / {store.targetCurrency} over 30 days</h3>
              <p>Retrieving data</p>
            </section>
        }
      </>
    );
  }
}

Tendency.propTypes = {
  store: PropTypes.shape({
    currentRate: PropTypes.number.isRequired,
    startCurrency: PropTypes.string.isRequired,
    targetCurrency: PropTypes.string.isRequired,
    historicRate: PropTypes.shape({
      growth: PropTypes.number,
    }),
  }),
};

export default Tendency;
