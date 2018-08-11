import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, FormControl } from 'react-bootstrap';
import { Redirect } from 'react-router';

import './Login.css';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputEmail: '',
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    const { inputEmail } = this.state;
    const { login } = this.props;
    this.setState({ inputEmail });
    login(inputEmail);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { token } = this.props;
    if (token) {
      return <Redirect to="/feed" />;
    }
    return (
      <form onSubmit={this.onSubmit}>
        <FormGroup>
          <div className="container">
            <FormControl
              name="inputEmail"
              value={this.inputEmail}
              required
              onChange={this.onChange}
              placeholder="your@email.com"
              type="email"
            />
            <label htmlFor="inputEmail">
              The IDDOG
            </label>
          </div>
        </FormGroup>
      </form>
    );
  }
}

Login.defaultProps = {
  login: '',
  token: '',
};

Login.propTypes = {
  token: PropTypes.string,
  login: PropTypes.func,
};

export default Login;
