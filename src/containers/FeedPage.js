import { setFeedList } from '../actions/FeedActions';
import { connect } from 'react-redux';
import FeedPage from '../components/Feed/FeedPage';

const mapStateToProps = state => {
    return {
        token: state.user.token,
        list: state.list,
    }
};

const mapDispatchToProps = dispatch => ({
    listCategories: token => dispatch(setFeedList(token)),
});

export default connect ( mapStateToProps, mapDispatchToProps )(FeedPage);