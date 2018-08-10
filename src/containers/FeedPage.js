import { setFeedList } from '../actions/FeedActions';
import { connect } from 'react-redux';
import FeedPage from '../components/Feed/FeedPage';

const mapStateToProps = state => {
    return {
        token: state.user.token,
        category: state.feed.category,
        list: state.feed.list,
    }
};

const mapDispatchToProps = dispatch => ({
    listCategories: (token, category) => dispatch(setFeedList(token, category)),
});

export default connect ( mapStateToProps, mapDispatchToProps )(FeedPage);