import { setAuthUserData } from '../actions/UserActions';
import { connect } from 'react-redux';
import Login from '../components/Login/Login';

const mapStateToProps = state => {
    return {
        token: state.user.token,
    }
};

const mapDispatchToProps = dispatch => ({
    login: email => dispatch(setAuthUserData(email)),
});

export default connect ( mapStateToProps, mapDispatchToProps )(Login);