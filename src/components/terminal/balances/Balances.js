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
          <td>{account.equity}</td>
          <td>{account.availableFunds}</td>
          <td>{account.marginBalance}</td>
          <td>{account.initialMargin}</td>
          <td>{account.maintenanceMargin}</td>
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
