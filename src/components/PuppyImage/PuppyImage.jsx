import React from 'react';
import { Modal, Button} from 'react-bootstrap';

import '../PuppyImage/PuppyImage.css';

class PuppyImage extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);

        this.state = {
            show: false
        };
    }
    
    handleClose() {
        const { location, category, dogId } = this.props;
        this.setState({ show: false });
        this.context.router.transitionTo(`${location.pathname}?category=${category}&id=${dogId}`);
    }

    handleShow() {
        const { history, category, dogId } = this.props;
        history.push(`${history.location.pathname}?category=${category}&id=${dogId}`);
        this.setState({ show: true });
    }
  
    render() {
        const { dogUrl } = this.props;
        const idDogImage = {
            backgroundImage: `url(${dogUrl})`,
        };
        return(
            <div className="puppy-frame">
                <div className="puppy-photo" style={idDogImage} onClick={this.handleShow}></div>
                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Body>
                        <div className="puppy-photo" style={idDogImage}></div>
                    </Modal.Body>
                </Modal>
                {/* <OriginalPuppy onHide={this.handleClose}/> */}
            </div>
        );
    }
}

export default PuppyImage;