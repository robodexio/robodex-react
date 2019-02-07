import { createStore } from 'redux';
import reducer from './reducer';
import API from './api';
import LastTrades from './services/LastTrades';

const store = createStore(reducer);
export default store;


const api = new API();

api.on('stream', (msg) => {
  store.dispatch({
    type: 'API_STREAM',
    stream: msg.stream,
    data: msg.data
  });
});

api.on('event', (msg) => {

});

new LastTrades(store, api);
