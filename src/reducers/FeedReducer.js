const initialState = {
  category: 'husky',
  list: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'ALL_PHOTOS':
      return { ...action.payload };
    default:
      return state;
  }
};
