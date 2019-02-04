import React, { Component } from 'react';
import './TradeHistory.css';

class TradeHistory extends Component {
  render() {
    return (
      <div className="TradeHistory Panel">
        <header>Trade History</header>
        <div class="table-scrollable-wrapper">
          <table>
            <thead>
              <tr>
                <th>Side</th>
                <th>Quantity</th>
                <th>Quantity ETH</th>
                <th>Price</th>
                <th>Type</th>
                <th>Fees</th>
                <th>Date Time</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Buy</td>
                <td>Buy</td>
                <td>Buy</td>
                <td>Buy</td>
                <td>Buy</td>
                <td>Buy</td>
                <td>Buy</td>
              </tr>
              <tr>
                <td>Buy</td>
                <td>Buy</td>
                <td>Buy</td>
                <td>Buy</td>
                <td>Buy</td>
                <td>Buy</td>
                <td>Buy</td>
              </tr>
              <tr>
                <td>Buy</td>
                <td>Buy</td>
                <td>Buy</td>
                <td>Buy</td>
                <td>Buy</td>
                <td>Buy</td>
                <td>Buy</td>
              </tr>
              <tr>
                <td>Buy</td>
                <td>Buy</td>
                <td>Buy</td>
                <td>Buy</td>
                <td>Buy</td>
                <td>Buy</td>
                <td>Buy</td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
    );
  }
}

export default TradeHistory;
