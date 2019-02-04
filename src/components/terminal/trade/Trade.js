import React, { Component } from 'react';
import './Trade.css';

class Trade extends Component {
  render() {
    return (
      <div className="Trade Panel">
        <header>Trade</header>
        <main>
          <div>
            <input type="button" value="BUY" />
            <input type="button" value="SELL" />
          </div>
        </main>
      </div>
    );
  }
}

export default Trade;
