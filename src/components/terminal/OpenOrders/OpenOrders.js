import React, { Component } from 'react';
import './OpenOrders.css';
import { connect } from 'react-redux';
import dateformat from 'dateformat';

class OpenOrders extends Component {
  renderOrder(order) {
    const directionClass = order.direction === 'sell' ? 'red' : 'green';
    let price = 'Market Price'
    if (order.type === 'limit') {
      price = order.price.toFixed(2)
    }
    const remaining = order.quantity - order.filledQuantity

    return (
      <tr>
        <td className={directionClass}>{order.direction}</td>
        <td>{order.quantity}</td>
        <td>{price}</td>
        <td>{order.filledQuantity}</td>
        <td>{remaining}</td>
        <td>{order.avgPrice.toFixed(2)}</td>
        <td>-</td>
        <td>{dateformat(order.time, 'd mmm HH:MM:ss', true)}</td>
        <td><div className="Trade-type">{order.type}</div></td>
        <td><span className="Order-cancel">Cancel</span></td>
      </tr>
    );
  }

  renderOrders() {
    let orders = [];
    if (this.props.orders) {
      orders = this.props.orders.map(this.renderOrder);
    }

    return (
      <div className="HorScrollable">
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
