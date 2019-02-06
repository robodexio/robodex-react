import React, { Component } from 'react';
import './OrderHistory.css';
import { connect } from 'react-redux';
import dateformat from 'dateformat';

class OrderHistory extends Component {
  renderOrder(order) {
    const directionClass = order.direction === 'sell' ? 'red' : 'green';
    let price = 'Market Price'
    if (order.type === 'limit') {
      price = order.price.toFixed(2)
    }

    return (
      <tr>
        <td className={directionClass}>{order.direction}</td>
        <td>{order.quantity}</td>
        <td>{price}</td>
        <td>{order.filledQuantity}</td>
        <td><div className="Trade-type">{order.status}</div></td>
        <td>{order.avgPrice.toFixed(2)}</td>
        <td>{dateformat(order.time, 'd mmm HH:MM:ss', true)}</td>
        <td>-</td>
        <td><div className="Trade-type">{order.type}</div></td>
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
              <th>Status</th>
              <th>Avg. Price</th>
              <th>Date Time</th>
              <th>PNL</th>
              <th>Type</th>
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
      <div className="OrderHistory Panel">
        <header>Order History</header>
        <main>{this.renderOrders()}</main>
        <footer></footer>
      </div>
    );
  }
}

export default connect(state => ({
  orders: state.orderHistory
}))(OrderHistory);
