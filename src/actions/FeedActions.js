import axios from 'axios';

export const setFeedList = token => dispatch => (
  axios
    .get('https://api-iddog.idwall.co/feed', {
        headers: { Authorization: token }
    })
    .then(response => dispatch({
      type: 'ALL_PHOTOS',
      payload: {
        category: response.data.category,
        list: response.data.list,
      },
    }))
);
