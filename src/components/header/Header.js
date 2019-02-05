import React, { Component } from 'react';
import './Header.css';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class Header extends Component {
  renderIndex() {
    const index = this.props.index;
    if (index) {
      return (
        <div className="Header-index">Etherium Index: {index.price}</div>
      );
    } else {
      return (
        <div className="Header-index">Etherium Index</div>
      );
    }
  }

  render() {
    return (
      <div className="Header">
        <div className="Header-left">
          <h1>Terebit</h1>
        </div>
        <div className="Header-center">
          {this.renderIndex()}
        </div>
        <div className="Header-right">
        </div>
      </div>
    );
  }
}

export default withRouter(connect(state => ({
  index: state.index
}))(Header));
