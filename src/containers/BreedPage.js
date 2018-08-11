import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { setFeedList } from '../actions/FeedActions';
import BreedPage from '../components/Breed/BreedPage';

const mapStateToProps = (state, { history }) => ({
  token: state.user.token,
  category: state.feed.category,
  history,
});

const mapDispatchToProps = dispatch => ({
  setBreedCategory: (token, category) => dispatch(setFeedList(token, category)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BreedPage));
