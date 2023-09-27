const initialState = {
  count: 0,
  size: 'L',
  color: 0,
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TAB_SELECTION':
      return { ...state, count: action.count };
    case 'SIZE_SELECTION':
      return { ...state, size: action.size };
    case 'COLOR_SELECTION':
      return { ...state, color: action.color };
    default:
      return state;
  }
};

export default counterReducer;
