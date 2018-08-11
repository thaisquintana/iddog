import axios from 'axios';

export const setFeedList = (token, category) => dispatch => (
  axios
    .get(`https://api-iddog.idwall.co/feed?category=${category}`, {
        headers: { Authorization: token },
    })
    .then(response => dispatch({
      type: 'ALL_PHOTOS',
      payload: {
        category: response.data.category,
        list: response.data.list.map((imageUrl) => ({
          id: imageUrl
            .replace(/^.*_/, '') // remove everything until '_'
            .replace(/\..*$/, ''), // remove image extension,
          imageUrl, 
        })),
      },
    }))
);