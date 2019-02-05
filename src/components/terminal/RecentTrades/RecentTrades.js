import React, { Component } from 'react';
import './RecentTrades.css';

class RecentTrades extends Component {
  render() {
    return (
      <div className="RecentTrades Panel">
        <header>Recent Trades</header>
        <main>
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
                <tr>
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
                </tr>
                <tr>
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
                </tr>
              </tbody>
            </table>
        </main>
        <footer></footer>
      </div>
    );
  }
}

export default RecentTrades;
