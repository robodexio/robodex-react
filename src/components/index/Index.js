import React, { Component } from 'react';
import './Index.css';
import { connect } from 'react-redux';
import dateformat from 'dateformat';

class Index extends Component {
  renderExchange(ex) {
    if (ex.online) {
      const weightClass = ex.weight ? 'green' : 'red';
      return (
        <tr key={ex.name}>
          <td>{ex.name}</td>
          <td className={weightClass}>{ex.price.toFixed(2)}</td>
          <td>{dateformat(ex.time, 'HH:MM:ss', true)}</td>
          <td className={weightClass}>{ex.weight ? (ex.weight * 100).toFixed(2) + '%' : '0.00%'}</td>
        </tr>
      );
    } else {
      return (
        <tr key={ex.name}>
          <td>{ex.name}</td>
          <td className="red">0.00</td>
          <td>No connection</td>
          <td className="red">0.00%</td>
        </tr>
      );
    }
  }

  renderExchanges() {
    let exchanges = [];
    if (this.props.index) {
      exchanges = this.props.index.exchanges.map(this.renderExchange);
    }

    return (
      <table>
        <thead>
          <tr>
            <th>Exchange</th>
            <th>Average of Bid / Ask</th>
            <th>Last update (UTC)</th>
            <th>Weight</th>
          </tr>
        </thead>
        <tbody>
          {exchanges}
        </tbody>
      </table>
    );
  }

  render() {
    return (
      <div className="Index">
        <div className="Panel">
          <header>Exchanges</header>
          <main>{this.renderExchanges()}</main>
          <footer></footer>
        </div>
      </div>
    );
  }
}

export default connect(state => ({
  index: state.index
}))(Index);
