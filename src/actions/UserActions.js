import axios from 'axios';

export const setAuthUserData = email => dispatch => (
  axios
    .post('https://api-iddog.idwall.co/signup', {
      email,
    })
    .then((response) => {
      sessionStorage.setItem('token', response.data.user.token);
      return dispatch({
        type: 'USER_SET_DATA',
        payload: {
          token: response.data.user.token,
        },
      });
    })
);

export const unsetUserData = () => ({
  type: 'USER_UNSET_DATA',
});

