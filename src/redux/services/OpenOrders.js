class OpenOrders {
  constructor(store, api) {
    this.store = store;
    this.api = api;

    this.loadOrders();
    setInterval(() => {
      this.loadOrders()
    }, 5000);

    this.api.on('online', online => {
      if (online) {
        this.loadOrders();
      }
    });
  }

  loadOrders() {
    this.api.openOrders().then(orders => {
      this.store.dispatch({
        type: 'OPEN_ORDERS',
        orders
      });
    }).catch(err => {
    });
  }
}

export default OpenOrders;
