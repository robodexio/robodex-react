import React, { Component } from 'react';
import './Trade.css';

class Trade extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: 'limit',
      quantity: 0,
      price: 0
    };

    this.handleLimit = this.handleLimit.bind(this);
    this.handleMarket = this.handleMarket.bind(this);
    this.handleBuy = this.handleBuy.bind(this);
    this.handleSell = this.handleSell.bind(this);
    this.handleQuantityChange = this.handleQuantityChange.bind(this);
    this.handlePriceChange = this.handlePriceChange.bind(this);
  }

  handleLimit(event) {
    this.setState({
      type: 'limit'
    });
  }

  handleMarket(event) {
    this.setState({
      type: 'market'
    });
  }

  handleBuy(event) {
  }

  handleSell(event) {
  }

  handleQuantityChange(event) {
    this.setState({
      quantity: event.target.value
    });
  }

  handlePriceChange(event) {
    this.setState({
      price: event.target.value
    });
  }

  render() {
    let price;
    if (this.state.type === 'limit') {
      price = (
        <div className="Trade-field">
            <header>Price:</header>
            <div>
              <input type="number" value={this.state.price} onChange={this.handlePriceChange} />
            </div>
          </div>
      );
    }

    return (
      <div className="Trade Panel">
        <header>Trade</header>
        <main>
          <div className="Trade-typeSelector">
            <ul>
              <li className={this.state.type === 'limit' ? 'selected' : null} onClick={this.handleLimit}>Limit</li>
              <li className={this.state.type === 'market' ? 'selected' : null} onClick={this.handleMarket}>Market</li>
            </ul>
          </div>
          <div className="Trade-field">
            <header>Quantity:</header>
            <div>
              <input type="number" value={this.state.quantity} onChange={this.handleQuantityChange} />
            </div>
          </div>
          {price}
          <div className="Trade-buttons">
            <input className="Trade-button-buy" type="button" value="BUY" onClick={this.handleBuy} />
            <input className="Trade-button-sell" type="button" value="SELL" onClick={this.handleSell} />
          </div>
        </main>
      </div>
    );
  }
}

export default Trade;
