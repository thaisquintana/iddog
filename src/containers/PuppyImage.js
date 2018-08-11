import { setFeedList } from '../actions/FeedActions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import PuppyImage from '../components/PuppyImage/PuppyImage';

const mapStateToProps = (state,{history}) => {
    return {
        history,
        category: state.feed.category,
    }
};

export default withRouter(connect ( mapStateToProps )(PuppyImage));