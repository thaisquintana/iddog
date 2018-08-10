import React from 'react';
import PropTypes from 'prop-types';
import PuppyImage from '../PuppyImage/PuppyImage';
import BreedPage from '../Breed/BreedPage';

import '../Feed/FeedPage.css';

class FeedPage extends React.Component {
    componentDidMount() {
        const { token, category } = this.props;
        this.props.listCategories(token, category );
    }

    render() {
        const { list, category} = this.props;

        // const categoryBreed = category.filter((breed) => {
        //     if (category === 'husky' 
        //         || (category === 'labrador' && !breed)){
        //        return true;
        //     }
        // });
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
                                <li key={dogImage}><PuppyImage dogUrl={dogImage} /></li>
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