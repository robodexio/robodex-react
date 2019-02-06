import React, { Component } from 'react';
import './Positions.css';
import { connect } from 'react-redux';
import dateformat from 'dateformat';

class Positions extends Component {
  renderPosition(position) {
    return (
      <tr>
        <td>Buy</td>
        <td>Buy</td>
        <td>Buy</td>
        <td>Buy</td>
        <td>Buy</td>
        <td>Buy</td>
        <td>Buy</td>
        <td>Buy</td>
        <td>Buy</td>
        <td>Buy</td>
      </tr>
    );
  }

  renderPositions() {
    let positions = [];
    if (this.props.positions) {
      positions = this.props.positions.map(this.renderPosition);
    }

    return (
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
            {positions}
          </tbody>
        </table>
      </div>
    );
  }

  render() {
    return (
      <div className="Positions Panel">
        <header>Positions</header>
        <main>{this.renderPositions()}</main>
        <footer></footer>
      </div>
    );
  }
}

export default connect(state => ({
  positions: state.positions
}))(Positions);

