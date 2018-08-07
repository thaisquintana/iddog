import React, { Component } from 'react';
import { setAuthUserData } from '../../actions/UserActions';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormGroup } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import { ControlLabel } from 'react-bootstrap';
import FloatingLabelInput from 'react-floating-label-input';
import 'react-floating-label-input/dist/react-floating-label-input.css';

import './Login.css';

class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            inputEmail: '',
        }

        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onSubmit(e) {
        e.preventDefault();
        const { inputEmail }  = this.state;
        this.setState({ inputEmail });
        console.log(this.state.inputEmail)
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
      const { inputEmail } = this.state;
        
      return (
        <form onSubmit={this.onSubmit}>
            <FormGroup>
                <div className="container">
                    <FormControl
                        name="inputEmail"
                        value={this.state.inputEmail}
                        required
                        onChange={this.onChange}
                        placeholder="your@email.com"
                        type="email"
                    />
                    <label htmlFor="inputEmail">The IDDOG</label>
                </div>
            </FormGroup>
        </form>
      );
    }
}

  Login.defaultProps = {
    inputEmail: '',
};

Login.propTypes = {
    inputEmail: PropTypes.string.isRequired,
};

const mapStateToProps = state => {
    return
  };
  
const mapDispatchToProps = dispatch => {
    setAuthUserData: () => dispatch({type: 'USER_SET_DATA'})
};

export default connect ( mapStateToProps, mapDispatchToProps )(Login);
  