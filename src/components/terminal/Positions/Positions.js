import React, { Component } from 'react';
import './Positions.css';
import { connect } from 'react-redux';
import dateformat from 'dateformat';

class Positions extends Component {
  renderPosition(position, index) {
    const sizeClass = position.size > 0 ? 'green' : 'red';
    const plClass = position.profitLoss > 0 ? 'green' : 'red';
    const uplClass = position.floatingPl > 0 ? 'green' : 'red';
    const rplClass = position.realizedPl > 0 ? 'green' : 'red';

    return (
      <tr key={index}>
        <td className={sizeClass}>{position.size}</td>
        <td className={sizeClass}>{position.sizeEth.toFixed(4)}</td>
        <td>{position.avgPrice.toFixed(2)}</td>
        <td>{position.markPrice.toFixed(2)}</td>
        <td className={plClass}>{position.profitLoss.toFixed(4)}</td>
        <td className={uplClass}>{position.floatingPl.toFixed(4)}</td>
        <td className={rplClass}>{position.realizedPl.toFixed(4)}</td>
        <td>{position.initialMargin.toFixed(4)}</td>
        <td>{position.maintenanceMargin.toFixed(4)}</td>
        <td></td>
      </tr>
    );
  }

  renderPositions() {
    let positions = [];
    if (this.props.positions) {
      positions = this.props.positions.map((p, i) => this.renderPosition(p, i));
    }

    return (
      <div className="HorScrollable">
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

