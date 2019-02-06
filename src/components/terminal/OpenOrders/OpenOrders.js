import React, { Component } from 'react';
import './OpenOrders.css';
import { connect } from 'react-redux';
import dateformat from 'dateformat';

class OpenOrders extends Component {
  renderOrder() {
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

  renderOrders() {
    let orders = [];
    if (this.props.orders) {
      orders = this.props.orders.map(this.renderOrder);
    }

    return (
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
            {orders}
          </tbody>
        </table>
      </div>
    );
  }

  render() {
    return (
      <div className="OpenOrders Panel">
        <header>Open Orders</header>
        <main>{this.renderOrders()}</main>
        <footer></footer>
      </div>
    );
  }
}

export default connect(state => ({
  orders: state.openOrders
}))(OpenOrders);
