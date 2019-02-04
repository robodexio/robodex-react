import React, { Component } from 'react';
import './Terminal.css';
import Balances from './balances/Balances'
import Plot from './plot/Plot'
import Instrument from './instrument/Instrument'
import Trade from './trade/Trade'
import Orderbook from './orderbook/Orderbook'
import RecentTrades from './recent-trades/RecentTrades'
import Positions from './positions/Positions'
import OpenOrders from './open-orders/OpenOrders'
import OrderHistory from './order-history/OrderHistory'
import TradeHistory from './trade-history/TradeHistory'

class Terminal extends Component {
  render() {
    return (
      <div className="Terminal">
        <Balances />
        <Plot />
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
