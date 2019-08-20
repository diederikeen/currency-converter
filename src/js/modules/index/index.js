import React, { Component, useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { toJS } from 'mobx';
import Converter from './converter';
import Tendency from './tendency';
import Graph from './graph';
import staticData from './staticData';
import AppState from '../../store';

import './index.css';

const Index = observer(() => {
  const store = useContext(AppState);
  const maxVal = Math.max.apply(Math, staticData.map(result => result.rate)).toFixed(4);
  const minVal = Math.min.apply(Math, staticData.map(result => result.rate)).toFixed(4);
  const baseCurrency = store.symbols[store.converter.baseCurrency];
  const targetCurrency = store.symbols[store.converter.targetCurrency];

  function onHandleSelectChange(name, value) {
    store.setCurrency(name, value);
    store.getCurrentRate();
    store.fetchHistoricalRate();
  }

  return (
    <main role="main" className="m-index">
      <div className="e-container">
        <h1 className="m-index__title">Currency converter</h1>
        <p className="m-index__intro">Get information about 177 different types of currencies world wide.</p>

        <h2 className="m-index__subtitle">{baseCurrency} to {targetCurrency}</h2>
        <p className="m-index__body">The graph below shows historical exchange rates between the {baseCurrency} and the {targetCurrency} between 7/21/2019 and 8/18/2019 </p>

        <div className="m-index__content-wrap">
          <aside className="m-index__aside">

            <Converter
              store={store.converter}
              onHandleInputChange={store.setAmount}
              onHandleSelectChange={onHandleSelectChange}
              options={store.symbols}
              isFetching={store.state.isFetching}
              error={store.state.error}
            />
          </aside>
          <section className="m-index__main-content">
            <Graph
              data={staticData}
              baseCurrency={store.converter.startCurrency}
              targetCurrency={store.converter.targetCurrency}
              maxVal={maxVal}
              minVal={minVal}
            />

            <Tendency
              historicRate={store.historicRate}
              converter={store.converter}
              error={store.state.error}
            />
          </section>
        </div>
      </div>
    </main>
  );
});

export default Index;
