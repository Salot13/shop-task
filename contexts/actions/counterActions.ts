export const increment = (data) => {
  return {
    type: 'TAB_SELECTION',
    count: data,
  };
};

export const sizeSelection = (data) => {
  return {
    type: 'SIZE_SELECTION',
    size: data,
  };
};

export const colorselection = (data) => {
  return {
    type: 'COLOR_SELECTION',
    color: data,
  };
};
