import React from 'react';
import PropTypes from 'prop-types';
import BreedPage from '../../containers/BreedPage';
import PuppyImage from '../../containers/PuppyImage';

import '../Feed/FeedPage.css';

class FeedPage extends React.Component {
    componentDidMount() {
        const { token, category } = this.props;
        this.props.listCategories(token, category );
    }

    render() {
        const { list, category, selectedId} = this.props;
        console.log(selectedId);
        return(
            <div className="category-list">
                <h1>Feed</h1>
                <div>
                   <BreedPage />
                </div>
                <div className="photo-list">
                   <ul>
                       {list.length > 0 && list.map((dogImage) => {
                            return (
                                <li key={dogImage.id}><PuppyImage dogUrl={dogImage.imageUrl} dogId={dogImage.id}/></li>
                            );
                       })}
                   </ul> 
                </div>
            </div>
        );
    }
}

// FeedPage.propTypes = {
//     dogImage: PropTypes.array.isRequired,
//     breedCategory: PropTypes.string.isRequired,
// }

export default FeedPage;