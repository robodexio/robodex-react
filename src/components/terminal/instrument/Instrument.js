import React, { Component } from 'react';
import './Instrument.css';

class Instrument extends Component {
  render() {
    return (
      <div className="Instrument Panel">
        <div className="Instrument-instrument">ETH Perpetual</div>
        <div><span className="Instrument-title">24h low:</span>&nbsp;32423</div>
        <div><span className="Instrument-title">24h high:</span>&nbsp;3232</div>
        <div><span className="Instrument-title">24h vol.:</span>&nbsp;32958 ETH</div>
        <div><span className="Instrument-title">Funding/8h:</span>&nbsp;0.049%</div>
      </div>
    );
  }
}

export default Instrument;
