import { createStore } from 'redux';
import reducer from './reducer';
const store = createStore(reducer);
export default store;

const ws = new WebSocket('ws://localhost:9001');
ws.onmessage = msg => {
  console.log(msg);
  const json = JSON.parse(msg.data);
  if (json.stream) {
    if (json.stream === 'time') {
      store.dispatch({
        type: 'TIME',
        time: json.data
      });
      store.dispatch({
        type: 'ONLINE',
        time: true
      });
    }
  }
};
