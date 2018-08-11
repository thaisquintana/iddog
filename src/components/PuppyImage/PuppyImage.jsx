import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'react-bootstrap';

import './PuppyImage.css';

class PuppyImage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: props.isSelected,
    };
  }

  handleClose() {
    const { history } = this.props;
    history.push(`${history.location.pathname}`);
    this.setState({ show: false });
  }

  handleShow() {
    const { history, category, dogId } = this.props;
    history.push(`${history.location.pathname}?category=${category}&id=${dogId}`);
    this.setState({ show: true });
  }

  render() {
    const { dogUrl } = this.props;
    const { show } = this.state;
    const idDogImage = {
      backgroundImage: `url(${dogUrl})`,
    };
    return (
      <div className="puppy-frame">
        <div className="puppy-photo" style={idDogImage} onClick={this.handleShow} />
        <Modal show={show} onHide={this.handleClose}>
          <Modal.Body>
            <div className="puppy-photo" style={idDogImage} />
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

PuppyImage.propTypes = {
  dogUrl: PropTypes.string.isRequired,
  isSelected: PropTypes.bool.isRequired,
  history: PropTypes.object.isRequired,
  category: PropTypes.string.isRequired,
  dogId: PropTypes.string.isRequired,
};

export default PuppyImage;
