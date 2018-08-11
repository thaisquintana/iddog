import React from 'react';
import PropTypes from 'prop-types';
import BreedPage from '../../containers/BreedPage';
import PuppyImage from '../../containers/PuppyImage';

import './FeedPage.css';

class FeedPage extends React.Component {
  componentDidMount() {
    const { token, category, listCategories } = this.props;
    listCategories(token, category);
  }

  render() {
    const { list, category, selectedId } = this.props;
    return (
      <div className="category-list">
        <h1>
          Feed
        </h1>
        <div>
          <BreedPage category={category} />
        </div>
        <div className="photo-list">
          <ul>
            {list.length > 0 && list.map(dogImage => (
              <li key={dogImage.id}>
                <PuppyImage
                  dogUrl={dogImage.imageUrl}
                  isSelected={dogImage.id === selectedId}
                  dogId={dogImage.id}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

FeedPage.defaultProps = {
  selectedId: '',
};

FeedPage.propTypes = {
  category: PropTypes.string.isRequired,
  selectedId: PropTypes.string,
  token: PropTypes.string.isRequired,
  list: PropTypes.array.isRequired,
  listCategories: PropTypes.func.isRequired,

};

export default FeedPage;
