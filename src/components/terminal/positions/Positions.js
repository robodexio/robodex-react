import React, { Component } from 'react';
import './Positions.css';

class Positions extends Component {
  render() {
    return (
      <div className="Positions Panel">
        <header>Positions</header>
        <main>
          <div className="table-scrollable-wrapper">
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
        </main>
      </div>
    );
  }
}

export default Positions;
