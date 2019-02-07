class LastTrades {
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
    this.api.lastTrades().then(trades => {
      this.store.dispatch({
        type: 'LAST_TRADES',
        trades
      });
    });
  }
}

export default LastTrades;
