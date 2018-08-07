const initialState = {
    category: null,
    list: [],
  };
  
export default (state = initialState, action) => {
  switch (action.type) {
    case 'ALL_PHOTOS':
    return { ...action.payload };
    default:
      return state;
  }
}