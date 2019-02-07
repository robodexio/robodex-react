import React, { Component } from 'react';
import './Orderbook.css';
import { connect } from 'react-redux';

class Orderbook extends Component {
  renderLevel(level, index) {
    if (level) {
      return (
        <tr key={index}>
          <td>{level.price.toFixed(2)}</td>
          <td>{level.qty}</td>
          <td>{level.cm}</td>
        </tr>
      );
    } else {
      return (
        <tr key={index}>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
        </tr>
      );
    }
  }

  renderAsks() {
    let asks = [];
    if (this.props.orderbook) {
      asks = this.props.orderbook.asks;
    }

    asks = asks.slice(0, Math.min(asks.length, 5));
    asks = asks.concat([null, null, null, null, null].slice(0, 5 - asks.length));
    asks = asks.reverse()

    return (
      <div className="Asks">
        <table>
          <thead>
            <tr>
              <th>Price</th>
              <th>Size</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {asks.map((l, i) => this.renderLevel(l, i))}
          </tbody>
        </table>
      </div>
    );
  }

  renderBids() {
    let bids = []
    if (this.props.orderbook) {
      bids = this.props.orderbook.bids
    }

    bids = bids.slice(0, Math.min(bids.length, 5));
    bids = bids.concat([null, null, null, null, null].slice(0, 5 - bids.length));

    return (
      <div className="Bids">
        <table>
          <tbody>
            {bids.map((l, i) => this.renderLevel(l, i))}
          </tbody>
        </table>
      </div>
    );
  }

  renderPrices() {
    const last = this.props.orderbook ? this.props.orderbook.last.toFixed(2) : '';
    const mark = this.props.orderbook ? this.props.orderbook.mark.toFixed(2) : '';
    return (
      <div className="Orderbook-prices">
        <div><span>Last:</span> {last}</div>
        <div><span>Mark:</span> {mark}</div>
      </div>
    );
  }

  render() {
    return (
      <div className="Orderbook Panel">
        <header>Orderbook</header>
        <main>
          {this.renderAsks()}
          {this.renderPrices()}
          {this.renderBids()}
        </main>
        <footer></footer>
      </div>
    );
  }
}

export default connect(state => ({
  orderbook: state.orderbook
}))(Orderbook);
