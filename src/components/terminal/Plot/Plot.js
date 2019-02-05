import React, { Component } from 'react';
import './Plot.css';
import { TVChartContainer } from './TVChartContainer/index';

class Plot extends Component {
  render() {
    return (
      <div className="Plot Panel">
        <TVChartContainer />
      </div>
    );
  }
}

export default Plot;
