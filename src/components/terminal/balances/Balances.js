import React, { Component } from 'react';
import './Balances.css';
import { connect } from 'react-redux';

class Balances extends Component {
  renderBalances() {
    const account = this.props.account;
    if (account) {
      return (
        <tr>
          <td>ETH</td>
          <td>{account.equity.toFixed(4)}</td>
          <td>{account.availableFunds.toFixed(4)}</td>
          <td>{account.marginBalance.toFixed(4)}</td>
          <td>{account.initialMargin.toFixed(4)}</td>
          <td>{account.maintenanceMargin.toFixed(4)}</td>
        </tr>
      );
    } else {
      return (
        <tr>
          <td>ETH</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      );
    }
  }

  render() {
    return (
      <div className="Balances Panel">
        <header>Balances</header>
        <main>
          <div className="HorScrollable">
            <table>
              <thead>
                <tr>
                  <th></th>
                  <th>Equity</th>
                  <th>Available Balance</th>
                  <th>Margin Balance</th>
                  <th>Initial Margin</th>
                  <th>Maintenance Margin</th>
                </tr>
              </thead>
              <tbody>
                {this.renderBalances()}
              </tbody>
            </table>
          </div>
        </main>
        <footer></footer>
      </div>
    );
  }
}

export default connect(state => ({
  account: state.account
}))(Balances);
