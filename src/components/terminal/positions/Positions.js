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
                  <th>Size</th>
                  <th>Size ETH</th>
                  <th>Avg. Price</th>
                  <th>Mark Price</th>
                  <th>PNL</th>
                  <th>Session UPL</th>
                  <th>Session RPL</th>
                  <th>Initial Margin</th>
                  <th>Maintenance Margin</th>
                  <th>Close</th>
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
