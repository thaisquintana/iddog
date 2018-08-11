import React from 'react';
import PropTypes from 'prop-types';

import './BreedPage.css';

class BreedPage extends React.Component {
  constructor(props) {
    super(props);
    this.choosedCategory = this.choosedCategory.bind(this);
  }

  choosedCategory(e, category) {
    e.preventDefault();
    const { token, setBreedCategory, history } = this.props;
    history.push(history.location.pathname);
    setBreedCategory(token, category);
  }

  render() {
    const { category } = this.props;
    return (
      <div className="category-list">
        <ul>
          <li>
            <button type="button" className={category === 'husky' ? 'active' : ''} onClick={e => this.choosedCategory(e, 'husky')}>
              Husky
            </button>
          </li>
          <li>
            <button type="button" className={category === 'labrador' ? 'active' : ''} onClick={e => this.choosedCategory(e, 'labrador')}>
              Labrador
            </button>
          </li>
          <li>
            <button type="button" className={category === 'hound' ? 'active' : ''} onClick={e => this.choosedCategory(e, 'hound')}>
              Hound
            </button>
          </li>
          <li>
            <button type="button" className={category === 'pug' ? 'active' : ''} onClick={e => this.choosedCategory(e, 'pug')}>
              Pug
            </button>
          </li>
        </ul>
      </div>
    );
  }
}

BreedPage.defaultProps = {
  category: 'husky',
};

BreedPage.propTypes = {
  setBreedCategory: PropTypes.func.isRequired,
  token: PropTypes.string.isRequired,
  category: PropTypes.string,
  history: PropTypes.object.isRequired,
};

export default BreedPage;
