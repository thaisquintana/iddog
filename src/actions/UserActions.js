export const setAuthUserData = () => ({
  return () {
    fetch("https://api-iddog.idwall.co/signup", {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: '',
        token: ''
    }),
    })
    // .then(response => response.json(setUserData))
    // .catch();
  },      
});

export const setUserData = user => ({
  type: 'USER_SET_DATA',
  payload: {
    email: user.email,
    token: user.data.token
  },
});

export const unsetUserData = () => ({
  type: 'USER_UNSET_DATA',
});

