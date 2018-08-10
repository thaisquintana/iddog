import { setFeedList } from '../actions/FeedActions';
import { connect } from 'react-redux';
import BreedPage from '../components/Breed/BreedPage';

const mapStateToProps = state => {
    return {
        token: state.user.token,
        category: state.feed.category,
    }
};

const mapDispatchToProps = dispatch => ({
    setBreedCategory: (token, category) => dispatch(setFeedList(token, category)),
});

export default connect ( mapStateToProps, mapDispatchToProps )(BreedPage);