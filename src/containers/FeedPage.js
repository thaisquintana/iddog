import { connect } from 'react-redux';
import { setFeedList } from '../actions/FeedActions';
import FeedPage from '../components/Feed/FeedPage';

const mapStateToProps = (state, { location }) => {
  const params = new URLSearchParams(location.search);
  return {
    token: state.user.token,
    category: state.feed.category || params.get('category') || 'husky',
    selectedId: params.get('id'),
    list: state.feed.list,
  };
};

const mapDispatchToProps = dispatch => ({
  listCategories: (token, category) => dispatch(setFeedList(token, category)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FeedPage);
