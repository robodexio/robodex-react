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
      status: 'open',
    }
  ],
  positions: [
    {
      size: -5020,
      sizeEth: -40.40402,
      avgPrice: 108.32,
      profitLoss: -0.434,
      maintenanceMargin: 3.2323,
      initialMargin: 4.2302,
      markPrice: 104.23,
      realizedPl: 0.323,
      floatingPl: -0.323,
    },
    {
      size: 120,
      sizeEth: 1.34534,
      avgPrice: 108.32,
      maintenanceMargin: 3.2323,
      initialMargin: 4.2302,
      markPrice: 104.23,
      profitLoss: 0.64,
      realizedPl: 0.323,
      floatingPl: 0.323,
    },
    {
      size: 4020,
      sizeEth: 32.233939,
      avgPrice: 108.32,
      maintenanceMargin: 3.2323,
      initialMargin: 4.2302,
      markPrice: 104.23,
      profitLoss: 0.334,
      realizedPl: -0.323,
      floatingPl: 0.323,
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
