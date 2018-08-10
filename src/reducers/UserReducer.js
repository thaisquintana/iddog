const initialState = {
    token: sessionStorage.getItem('token'),
  };
  
export default (state = initialState, action) => {
  switch (action.type) {
    case 'USER_SET_DATA':
      return { ...action.payload };
    case 'USER_UNSET_DATA':
      return {};
    default:
      return state;
  }
}