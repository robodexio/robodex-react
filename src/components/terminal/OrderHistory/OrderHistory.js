import React, { Component } from 'react';
import './OrderHistory.css';

class OrderHistory extends Component {
  render() {
    return (
      <div className="OrderHistory Panel">
        <header>Order History</header>
        <main>
          <div className="table-scrollable-wrapper">
            <table>
              <thead>
                <tr>
                  <th>Side</th>
                  <th>Size</th>
                  <th>Price</th>
                  <th>Completed</th>
                  <th>Status</th>
                  <th>Avg. Price</th>
                  <th>Date Time</th>
                  <th>PNL</th>
                  <th>Type</th>
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
        <footer></footer>
      </div>
    );
  }
}

export default OrderHistory;
