const initialState = {
  tradeHistory: [
    {
      quantity: 3232,
      price: 108.30,
      direction: 'buy',
      type: 'limit',
      time: Date.now()
    },
    {
      quantity: 3232,
      price: 108.30,
      direction: 'sell',
      type: 'limit',
      time: Date.now()
    },
    {
      quantity: 3232,
      price: 108.30,
      direction: 'buy',
      type: 'market',
      time: Date.now()
    }
  ],
  lastTrades: [

  ],
  orderHistory: [
    {
      direction: 'sell',
      avgPrice: 108.32,
      quantity: 3202,
      filledQuantity: 402,
      type: 'market',
      time: Date.now(),
      status: 'filled',
    },
    {
      direction: 'buy',
      avgPrice: 108.32,
      quantity: 3202,
      filledQuantity: 402,
      type: 'market',
      time: Date.now(),
      status: 'open',
    },
    {
      direction: 'sell',
      avgPrice: 108.32,
      quantity: 3202,
      filledQuantity: 402,
      type: 'limit',
      time: Date.now(),
      status: 'filled',
      price: 108.42
    },
    {
      direction: 'sell',
      avgPrice: 108.32,
      quantity: 3202,
      filledQuantity: 402,
      type: 'market',
      time: Date.now(),
      status: 'open'
    }
  ],
  openOrders: [
    {

    },
    {

    },
    {
      
    }
  ],
  positions: [
    {

    },
    {

    },
    {

    }
  ]
};

const reducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case 'JUST_ACTION':
      return { ...state, message: 'Hello' };
    case 'TIME':
      return { ...state, time: action.time };
    case 'ONLINE': 
      return { ...state, online: action.online };
    case 'INDEX':
      return { ...state, index: action.index };
    case 'ACCOUNT':
      return { ...state, account: action.account };
    case 'ORDERBOOK':
      return { ...state, orderbook: action.orderbook };
    default:
      return state;
  }
};

export default reducer;
