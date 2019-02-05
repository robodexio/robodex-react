const initialState = {
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
