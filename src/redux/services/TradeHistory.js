class TradeHistory {
  constructor(store, api) {
    this.store = store;
    this.api = api;

    this.loadTrades();
    setInterval(() => {
      this.loadTrades()
    }, 5000);

    this.api.on('online', online => {
      if (online) {
        this.loadTrades();
      }
    });
  }

  loadTrades() {
    this.api.tradeHistory().then(trades => {
      this.store.dispatch({
        type: 'TRADE_HISTORY',
        trades
      });
    }).catch(err => {
    });
  }
}

export default TradeHistory;