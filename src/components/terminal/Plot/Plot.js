import React, { Component } from 'react';
import './Plot.css';
import { TVChartContainer } from './TVChartContainer/index';

class Plot extends Component {
  render() {
    return (
      <div className="Plot Panel">
        <header>Charts</header>
        <main>
          <TVChartContainer datafeedUrl="https://udf.robodex.io" symbol="ETH-PERPETUAL" interval="1" />
        </main>
        <footer></footer>
      </div>
    );
  }
}

export default Plot;
