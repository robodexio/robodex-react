class OrderHistory {
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
    this.api.orderHistory().then(orders => {
      this.store.dispatch({
        type: 'ORDER_HISTORY',
        orders
      });
    });
  }
}

export default OrderHistory;