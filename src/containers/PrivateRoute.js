import { connect } from 'react-redux';
import PrivateRoute from '../routes/PrivateRoute';

const mapStateToProps = state => ({
  token: state.user.token,
});

export default connect(mapStateToProps, {})(PrivateRoute);
