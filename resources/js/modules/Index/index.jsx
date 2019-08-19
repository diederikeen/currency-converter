import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import PropTypes from 'prop-types';
import Converter from './Converter.jsx';
import Tendency from './Tendency.jsx';
import Graph from './LineGraph.jsx';
import staticData from './staticData';
// eslint-disable-next-line no-unused-vars
import Style from './index.css';

@inject('store')
@observer
class Index extends Component {
  render() {
    const { store } = this.props;
    const maxVal = Math.max.apply(Math, staticData.map(result => result.rate)).toFixed(4);
    const minVal = Math.min.apply(Math, staticData.map(result => result.rate)).toFixed(4);

    return (
      <main role="main" className="m-index">
        <div className="e-container">
          <h1 className="m-index__title">Currency converter</h1>
          <p className="m-index__intro">Get information about 177 different types of currencies world wide.</p>
          <h2 className="m-index__subtitle">{store.startCurrency} to {store.targetCurrency}</h2>
          <p className="m-index__body">The graph below shows historical exchange rates between the {store.currencies.data[store.startCurrency]} and the {store.currencies.data[store.targetCurrency]} between 7/21/2019 and 8/18/2019 </p>

          <div className="m-index__content-wrap">
            <aside className="m-index__aside">
              <Converter />
            </aside>
            <section className="m-index__main-content">
              <Graph
                data={staticData}
                baseCurrency={store.startCurrency}
                targetCurrency={store.targetCurrency}
                maxVal={maxVal}
                minVal={minVal}
              />

              <Tendency />
            </section>
          </div>
        </div>
      </main>
    );
  }
}

Index.propTypes = {
  store: PropTypes.shape({
    startCurrency: PropTypes.string.isRequired,
    targetCurrency: PropTypes.string.isRequired,
  }),
};

export default Index;
