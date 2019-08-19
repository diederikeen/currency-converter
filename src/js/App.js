import 'babel-polyfill';
import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import PropTypes from 'prop-types';

// eslint-disable-next-line no-unused-vars
import Style from './App.css';
import Index from './modules/index';

@inject('store')
@observer
class App extends Component {
  componentDidMount() {
    const { store } = this.props;
    store.fetchSymbols();
    store.fetchData();
  }

  // eslint-disable-next-line class-methods-use-this
  render() {
    return (
      <Index/>
    );
  }
}

App.propTypes = {
  store: PropTypes.shape({
    fetchSymbols: PropTypes.func.isRequired,
    fetchData: PropTypes.func.isRequired,
  }),
};

export default App;
