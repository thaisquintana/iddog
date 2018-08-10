import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

import '../Breed/BreedPage.css';

class BreedPage extends React.Component {
    // componentDidMount() {
    //     const { token, category } = this.state;
    //     this.props.setBreedCategory(token, category );
    // }
    constructor(props){
        super(props);

        this.saveTask = this.saveTask.bind(this);
    }

    saveTask(e) {
        e.preventDefault();
        const {token, category} = this.props;
        console.log(category);
        // this.setBreedCategory(token, category);
        // console.log(this.setBreedCategory);

    }
    render() {
        const { saveTask } = this.props;
        return(
            <div className="category-list">
                <ul>
                        <li>
                            <a href='#' className="active" onClick={() => saveTask('husky')}> Husky </a>
                        </li>
                        <li>
                            <a href='#'> Labrador </a>
                        </li>
                        <li>
                            <a href='#'> Hound </a>
                        </li>
                        <li>
                            <a href='#'> Pug </a>
                        </li>
                    </ul>
            </div>
        );
    }
}

BreedPage.propTypes = {
    setBreedCategory: PropTypes.func,
}

export default BreedPage;