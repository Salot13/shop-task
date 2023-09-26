const initialState = {
  count: 0,
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TAB_SELECTION':
      return { count: action.count };
    default:
      return state;
  }
};

export default counterReducer;
