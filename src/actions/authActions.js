import axios from "axios";

export function login(data) {
  return dispatch => {
    return axios.post('https://api-iddog.idwall.co/signup', data).then(res => {
      const token = res.data.token;
      localStorage.setItem('jwtToken');
    });
  }
}