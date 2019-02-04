import React, { Component } from 'react';
import './Orderbook.css';

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

  renderPrices() {
    return (
      <div>
        
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

export default Orderbook;
