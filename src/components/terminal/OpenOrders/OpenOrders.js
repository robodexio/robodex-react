import React, { Component } from 'react';
import './OpenOrders.css';

class OpenOrders extends Component {
  render() {
    return (
      <div className="OpenOrders Panel">
        <header>Open Orders</header>
        <main>
          <div className="table-scrollable-wrapper">
            <table>
              <thead>
                <tr>
                  <th>Side</th>
                  <th>Size</th>
                  <th>Price</th>
                  <th>Completed</th>
                  <th>Remaining</th>
                  <th>Avg. Price</th>
                  <th>Initial Margin</th>
                  <th>Date Time</th>
                  <th>Type</th>
                  <th>Actions</th>
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
        </main>
      </div>
    );
  }
}

export default OpenOrders;
