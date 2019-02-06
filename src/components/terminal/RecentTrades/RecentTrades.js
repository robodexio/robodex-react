import React, { Component } from 'react';
import './RecentTrades.css';
import { connect } from 'react-redux';
import dateformat from 'dateformat';

class RecentTrades extends Component {
  renderTrade(trade, index) {
    const sideClass = trade.direction === 'sell' ? 'red' : 'green';
    return (
      <tr key={index}>
        <td className={sideClass}>{trade.direction}</td>
        <td className={sideClass}>{trade.price.toFixed(2)}</td>
        <td className={sideClass}>{trade.quantity}</td>
        <td>{dateformat(trade.time, 'd mmm HH:MM:ss', true)}</td>
      </tr>
    );
  }

  renderTrades() {
    let trades = [];
    if (this.props.trades) {
      trades = this.props.trades;
    }

    trades = trades.slice(0, Math.min(trades.length, 12));

    return (
      <table>
        <thead>
          <tr>
            <th>Side</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Date Time</th>
          </tr>
        </thead>
        <tbody>
          {trades.map((t, i) => this.renderTrade(t, i))}
        </tbody>
      </table>
    );
  }

  render() {
    return (
      <div className="RecentTrades Panel">
        <header>Recent Trades</header>
        <main>{this.renderTrades()}</main>
        <footer></footer>
      </div>
    );
  }
}

export default connect(state => ({
  trades: state.lastTrades
}))(RecentTrades);
