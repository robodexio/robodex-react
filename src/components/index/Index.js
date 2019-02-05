import React, { Component } from 'react';
import './Index.css';
import { connect } from 'react-redux';

class Index extends Component {
  renderExchange(ex) {
    return (
      <tr key={ex.name}>
        <td>ex.name</td>
        <td className="red">{ex.price ? ex.price : 0.00}</td>
        <td>{ex.online ? new Date(ex.time).toLocaleTimeString : 'No connection'}</td>
        <td className="red">{ex.weight ? ex.weight.toFixed(2) + '%' : '0.00%'}</td>
      </tr>
    );
  }

  renderExchanges() {
    let exchanges = [];
    const index = this.index;
    if (index) {
      exchanges = index.exchanges.map(ex => this.renderExchange(ex));
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
