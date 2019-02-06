import React, { Component } from 'react';
import './TradeHistory.css';
import { connect } from 'react-redux';
import dateformat from 'dateformat';

class TradeHistory extends Component {
  renderTrade(trade) {
    const quantityETH = trade.quantity / trade.price;
    const directionClass = trade.direction === 'sell' ? 'red' : 'green';
    
    return (
      <tr>
        <td className={directionClass}>{trade.direction}</td>
        <td>{trade.quantity}</td>
        <td>{quantityETH.toFixed(8)}</td>
        <td>{trade.price.toFixed(2)}</td>
        <td><div className="Trade-type">{trade.type}</div></td>
        <td>{dateformat(trade.time, 'd mmm HH:MM:ss', true)}</td>
      </tr>
    );
  }

  renderTrades() {
    let trades = [];
    if (this.props.trades) {
      trades = this.props.trades.map(this.renderTrade);
    }

    return (
      <div className="HorScrollable">
        <table>
          <thead>
            <tr>
              <th>Side</th>
              <th>Quantity</th>
              <th>Quantity ETH</th>
              <th>Price</th>
              <th>Type</th>
              <th>Date Time</th>
            </tr>
          </thead>
          <tbody>
            {trades}
          </tbody>
        </table>
      </div>
    );
  }

  render() {
    return (
      <div className="TradeHistory Panel">
        <header>Trade History</header>
        <main>{this.renderTrades()}</main>
        <footer></footer>
      </div>
    );
  }
}

export default connect(state => ({
  trades: state.tradeHistory
}))(TradeHistory);
