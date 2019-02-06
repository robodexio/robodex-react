import React, { Component } from 'react';
import './Plot.css';
import { TVChartContainer } from './TVChartContainer/index';

class Plot extends Component {
  render() {
    return (
      <div className="Plot Panel">
        <header>Charts</header>
        <main>
          <TVChartContainer />
        </main>
        <footer></footer>
      </div>
    );
  }
}

export default Plot;
