import { connect } from 'react-redux';
import { setAuthUserData } from '../actions/UserActions';
import Login from '../components/Login/Login';

const mapStateToProps = state => ({
  token: state.user.token,
});

const mapDispatchToProps = dispatch => ({
  login: email => dispatch(setAuthUserData(email)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
