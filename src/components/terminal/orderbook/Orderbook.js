import React, { Component } from 'react';
import './Orderbook.css';
import { connect } from 'react-redux';

class Orderbook extends Component {
  renderAsks() {
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Price</th>
              <th>Size</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>

          </tbody>
        </table>
      </div>
    );
  }

  renderBids() {
    return (
      <div>
        <table>
          <tbody>

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
