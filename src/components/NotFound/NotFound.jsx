import React from 'react';

import './NotFound.css';

class NotFound extends React.Component {
  render() {
    return (
      <div>
        <img src={require('../NotFound/images/notfound.jpg')} />
        <h2>
          Ooops Page Not Found - 404
        </h2>
      </div>
    );
  }
}

export default NotFound;
