import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store';
import axios from 'axios';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render( 
    <Provider store={configureStore()}><App /></Provider>,
    document.getElementById('root'),
);