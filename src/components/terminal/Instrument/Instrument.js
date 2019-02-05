import React, { Component } from 'react';
import './Instrument.css';
import { connect } from 'react-redux';

class Instrument extends Component {
  render() {
    const low = this.props.orderbook ? this.props.orderbook.low.toFixed(2) : '';
    const high = this.props.orderbook ? this.props.orderbook.high.toFixed(2) : '';

    return (
      <div className="Instrument Panel">
        <div>ETH Perpetual</div>
        <div><span>24h low:</span>&nbsp;{low}</div>
        <div><span>24h high:</span>&nbsp;{high}</div>
        <div><span>24h vol.:</span>&nbsp;32958 ETH</div>
        <div><span>Funding/8h:</span>&nbsp;0.049%</div>
      </div>
    );
  }
}

export default connect(state => ({
  orderbook: state.orderbook
}))(Instrument);
