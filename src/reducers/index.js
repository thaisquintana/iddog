import { combineReducers } from 'redux';
import UserReducer from './UserReducer';
import FeedReducer from './FeedReducer';

export default combineReducers({
  user: UserReducer,
  feed: FeedReducer,
});
