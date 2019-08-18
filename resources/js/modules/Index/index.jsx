import React from 'react';

import Converter from './Converter.jsx';
import Graph from './Graph.jsx';
// eslint-disable-next-line no-unused-vars
import Style from './index.css';

const Index = () => (
  <main role="main" className="m-index">
    <div className="e-container">
      <h1 className="m-index__title">Currency converter</h1>
      <p className="m-index__intro">Get information about 177 different types of currencies world wide.</p>
      <Converter />
      <Graph />
    </div>
  </main>
);

export default Index;
