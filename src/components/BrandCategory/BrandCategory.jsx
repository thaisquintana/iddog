import React from 'react';
import { Link } from "react-router-dom";

import '../BrandCategory/BrandCategory.css';

class FeedPage extends React.Component {
    render() {
        return(
            <div className="category-list">
                <div>
                    <ul>
                        <li>
                            <Link to='/feed/Husky'> Husky </Link>
                        </li>
                        <li>
                            <Link to='/feed/Labrador'> Labrador </Link>
                        </li>
                        <li>
                            <Link to='/feed/Hound'> Hound </Link>
                        </li>
                        <li>
                            <Link to='/feed/Pug'> Pug </Link>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default FeedPage;