const initialState = {
    email: null,
    token: null,
  };
  
export default (state = initialState, action) => {
  switch (action.type) {
    case 'USER_SET_DATA':
      return { ...action.payload };
    case 'ALL_PHOTOS':
    return { ...action.payload };
    case 'USER_UNSET_DATA':
      return {};
    default:
      return state;
  }
}