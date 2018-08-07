import axios from 'axios';

export const setFeedList = () => ({
  return (dispatch) {
    return axios.get('https://api-iddog.idwall.co/feed').then((response) => {
      dispatch(allPhotos(response.data))
    })
  }
});

export const allPhotos = data => ({
  type: 'ALL_PHOTOS',
  payload: {
    category: data.category,
  }
});