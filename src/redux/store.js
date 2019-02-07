import { createStore } from 'redux';
import reducer from './reducer';
import API from './api';
import { LastTrades, OpenOrders, OrderHistory, TradeHistory } from './services';

const store = createStore(reducer);
export default store;

const api = new API();

api.on('stream', msg => {
  store.dispatch({
    type: 'API_STREAM',
    stream: msg.stream,
    data: msg.data
  });
});

api.on('event', msg => {

});

api.on('online', online => {
  store.dispatch({
    type: 'ONLINE',
    online
  })
})

new LastTrades(store, api);
new OpenOrders(store, api);
new OrderHistory(store, api);
new TradeHistory(store, api);
