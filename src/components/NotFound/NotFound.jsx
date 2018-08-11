import React from 'react';
import Panda from './images/notfound.jpg';

import './NotFound.css';

const NotFound = () => (
  <div>
    <img src={Panda} alt="Panda Not Found" />
    <h2>
    Ooops Page Not Found - 404
    </h2>
  </div>
);

export default NotFound;
