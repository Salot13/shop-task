const initialState = {
  count: 0,
  size: 'L',
  color: 0,
};

const counterReducer = (state = initialState, action) => {
  console.log("action", action)
  switch (action.type) {
    case 'TAB_SELECTION':
      return { count: action.count };
    case 'SIZE_SELECTION':
      return { ...action, size: action.size };
    case 'COLOR_SELECTION':
      return { ...action, color: action.color };
    default:
      return state;
  }
};

export default counterReducer;
