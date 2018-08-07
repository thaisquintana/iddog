import axios from 'axios';

export const setAuthUserData = () => ({
  return (dispatch) {
    return axios.post('https://api-iddog.idwall.co/signup').then((response) => {
      dispatch(receiveData(response.data))
    })
  }
});

export const receiveData = data => ({
  type: 'RECEIVE_DATA',
  payload: {
    email: data.email,
    token: data.token,
  }
});

export const unsetUserData = () => ({
  type: 'USER_UNSET_DATA',
});

