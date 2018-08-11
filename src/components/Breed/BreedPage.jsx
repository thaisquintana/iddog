import React from 'react';
import PropTypes from 'prop-types';

import './BreedPage.css';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 'husky',
    };
    this.choosedCategory = this.choosedCategory.bind(this);
  }

  choosedCategory(e, category) {
    e.preventDefault();
    const { token, setBreedCategory, history } = this.props;
    history.push(history.location.pathname);
    setBreedCategory(token, category);
    const activated = e.target.id
    if (this.active === activated) {
      this.setState({ active: '' });
    } else {
      this.setState({ active: activated });
    }
  }

  render() {
    return (
      <div className="category-list">
        <ul>
          <li>
            <a href="#" className={this.state.active === 'husky' ? 'active' : ''} id="husky" onClick={e => this.choosedCategory(e, 'husky')}>
              Husky
            </a>
          </li>
          <li>
            <a href="#" className={this.state.active === 'labrador' ? 'active' : ''} id="labrador" onClick={e => this.choosedCategory(e, 'labrador')}>
              Labrador
            </a>
          </li>
          <li>
            <a href="#" className={this.state.active === 'hound' ? 'active' : ''} id="hound" onClick={e => this.choosedCategory(e, 'hound')}>
              Hound
            </a>
          </li>
          <li>
            <a href="#" className={this.state.active === 'pug' ? 'active' : ''} id="pug" onClick={e => this.choosedCategory(e, 'pug')}>
              Pug
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Login;
