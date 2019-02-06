import React, { Component } from 'react';
import './Terminal.css';
import Balances from './Balances/Balances'
import Plot from './Plot/Plot'
import Instrument from './Instrument/Instrument'
import Trade from './Trade/Trade'
import Orderbook from './Orderbook/Orderbook'
import RecentTrades from './RecentTrades/RecentTrades'
import Positions from './Positions/Positions'
import OpenOrders from './OpenOrders/OpenOrders'
import OrderHistory from './OrderHistory/OrderHistory'
import TradeHistory from './TradeHistory/TradeHistory'

class Terminal extends Component {
  render() {
    return (
      <div className="Terminal">
        <Balances />
        <Plot />
        <Instrument />
        <div className="Terminal-market">
          <Trade />
          <Orderbook />
          <RecentTrades />
        </div>
        <Positions />
        <OpenOrders />
        <OrderHistory />
        <TradeHistory />
      </div>
    );
  }
}

export default Terminal;
