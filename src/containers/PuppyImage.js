import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import PuppyImage from '../components/PuppyImage/PuppyImage';

const mapStateToProps = (state, { history }) => ({
  history,
  category: state.feed.category,
});

export default withRouter(connect(mapStateToProps)(PuppyImage));
