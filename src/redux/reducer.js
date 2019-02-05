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
    default:
      return state;
  }
};

export default reducer;
