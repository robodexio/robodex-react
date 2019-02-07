const initialState = {
  online: false
}

export default function (state = initialState, action) {
  switch (action.type) {
    case 'API_STREAM':
      switch (action.stream) {
        // Public
        case 'time':
          return { ...state, time: action.data, online: true };
        case 'index':
          return { ...state, index: action.data };
        case 'funding':
          return { ...state, funding: parseFloat(action.data) };
        case 'orderbook':
          return { ...state, orderbook: action.data };

        // Private
        case 'account':
          return { ...state, account: action.data };
        case 'positions':
          return { ...state, positions: action.data };
        default:
          return state;
      }
    case 'ONLINE':
      return { ...state, online: action.online };
    case 'LAST_TRADES':
      return { ...state, lastTrades: action.trades };
    case 'TRADE_HISTORY':
      return { ...state, tradeHistory: action.trades };
    case 'ORDER_HISTORY':
      return { ...state, orderHistory: action.orders };
    default:
      return state;
  }
}
