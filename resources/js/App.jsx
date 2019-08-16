import React, { Component } from 'react';
import { observer } from 'mobx-react';
import PropTypes from 'prop-types';

import styles from './App.css';

@observer class App extends Component {
  render() {
    const { store: { amount } } = this.props;

    return (
      <div className="e-container">
        <h1>Currency converter</h1>

        <span>{amount}</span>
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
  }),
};

export default App;
