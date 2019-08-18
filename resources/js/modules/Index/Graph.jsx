import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

@inject('store')
@observer
class Graph extends Component {
  constructor() {
    super();
  };

  render() {
    return (
      ''
    );
  }
}

export default Graph;
