import React from 'react';
import * as actionCreators from '../../actions/UserActions';
import { setAuthUserData } from '../../actions/UserActions';
import { connect } from 'react-redux';
import { FormGroup } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';

import './Login.css';

class Login extends React.Component {
    constructor(props) {
        super(props);
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

const mapStateToProps = state => {
    return state
};

export default connect ( mapStateToProps, actionCreators )(Login);
  