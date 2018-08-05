import React, { Component } from 'react';
import { connect } from 'react-redux';
import { authLogin } from '../../actions/authLogin';
import { FormGroup } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import { ControlLabel } from 'react-bootstrap';
import PropTypes from 'prop-types';
import FloatingLabelInput from 'react-floating-label-input';
import 'react-floating-label-input/dist/react-floating-label-input.css';

import './Login.css';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
        }

        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onSubmit(e) {
        e.preventDefault();
        if (this.isValid ()) {
            this.props.authLogin(this.state).then(
                (res) => this.context.router.push('/'),
            );
        }
    }
    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
      const { email } = this.state;
        
      return (
        <form onSubmit={this.onSubmit}>
            <FormGroup>
                <div>
                    <FloatingLabelInput
                    id="example-3"
                    label="The IDDOG"
                    name="email"
                    value={this.email}
                    required
                    onChange={this.onChange}
                    placeholder="your@email.com"
                    shrink={90}
                    type="email"
                    />
                </div>
            </FormGroup>
        </form>
      );
    }
  }

  Login.propTypes = {
      authLogin: PropTypes.func.isRequired
  }
  Login.propTypes = {
      router: PropTypes.object.isRequired
  }
  export default connect ( null, { authLogin })(Login);
  