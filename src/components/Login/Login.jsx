import React, { Component } from 'react';
import { FormGroup } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import { ControlLabel } from 'react-bootstrap';
import FloatingLabelInput from 'react-floating-label-input';
import 'react-floating-label-input/dist/react-floating-label-input.css';

import './Login.css';

class LoginIpunt extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            validEmail: this.props.validEmail,
        }

        this.onChange = this.onChange.bind(this);
        this.logged = this.logged.bind(this);
    }

    logged(e) {
        e.preventDefault();
        console.log('logou');

        const { onLogged } = this.props;
        const {
            validEmail,
        } = this.state;

        onLogged({ validEmail });

        this.setState({
            validEmail: '',
        });
    }
    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
      }
    render() {
        const {
            validEmail,
        } = this.state;

      return (
        <form onSubmit={this.logged}>
            <FormGroup>
                <div>
                    <FloatingLabelInput
                    id="example-3"
                    label="The IDDOG"
                    name="validEmail"
                    value={validEmail}
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
  
  export default LoginIpunt;
  