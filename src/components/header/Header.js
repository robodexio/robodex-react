import React, { Component } from 'react';
import './Header.css';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class Header extends Component {
  renderIndex() {
    const index = this.props.index;
    if (index) {
      return (
        <div className="Header-index">Etherium Index: {index.price.toFixed(2)}</div>
      );
    } else {
      return (
        <div className="Header-index">Etherium Index</div>
      );
    }
  }

  renderRight() {
    const account = this.props.account
    const equity = account ? account.equity.toFixed(4) : ''
    const available = account ? account.availableFunds.toFixed(4) : ''
    const imPercent = account ? ((account.initialMargin / account.marginBalance) * 100).toFixed(2) + '%' : '0.00%'
    const mmPercent = account ? ((account.maintenanceMargin / account.marginBalance) * 100).toFixed(2) + '%' : '0.00%'

    return (
      <div>
        <div className="Header-margin">
          <div><span>IM:</span> {imPercent}</div>
          <div><span>MM:</span> {mmPercent}</div>
        </div>
        <div className="Header-balance">
          <div><span>Equity</span></div>
          <div>{equity}</div>
        </div>
        <div className="Header-balance">
          <div><span>Available</span></div>
          <div>{available}</div>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="Header">
        <div className="Header-left">
          <h1>RoboDEX</h1>
        </div>
        <div className="Header-center">
          {this.renderIndex()}
        </div>
        <div className="Header-right">
          {this.renderRight()}
        </div>
      </div>
    );
  }
}

export default withRouter(connect(state => ({
  index: state.index,
  account: state.account
}))(Header));
