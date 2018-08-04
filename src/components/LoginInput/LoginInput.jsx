import React, { Component } from 'react';
import { FormGroup } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import { ControlLabel } from 'react-bootstrap';
import FloatingLabelInput from 'react-floating-label-input';
import 'react-floating-label-input/dist/react-floating-label-input.css';

import './loginInput.css';

class LoginIpunt extends Component {
    render() {
      return (
        <form>
            <FormGroup>
                <div>
                    <FloatingLabelInput
                    id="example-3"
                    label="The IDDOG"
                    onChange={('onChange')}
                    placeholder="your@email.com"
                    shrink={90}
                    />
                </div>
            </FormGroup>
        </form>
      );
    }
  }
  
  export default LoginIpunt;
  