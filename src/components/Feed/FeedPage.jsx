import React from 'react';
import { Link } from 'react-router-dom';
import PhotoList from '../PhotoList/PhotoList';
import BrandCategory from '../BrandCategory/BrandCategory';

import '../Feed/FeedPage.css';

class FeedPage extends React.Component {
    componentDidMount() {
        const { token } = this.props;
        this.props.listCategories(token);
    }

    render() {
        const { list, listCategories, puppy } = this.props;
        const imageList = list.map( list => {
            return(
                <li>{list}</li>
            )
        })
        return(
            <div className="category-list">
                <h1>Feed</h1>
                <div>
                   <BrandCategory />
                </div>
                <div className="photo-list">
                   <ul>
                       {imageList}
                   </ul> 
                </div>
            </div>
        );
    }
}

export default FeedPage;