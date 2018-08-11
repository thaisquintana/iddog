import React from 'react';
import { Route, Redirect } from 'react-router';
import PropTypes from 'prop-types';


const PrivateRoute = ({ token, path, component: Component }) => (
  <Route
    path={path}
    render={props => (token ? (
      <Component {...props} />
    ) : (
      <Redirect
        to="/"
      />
    ))
        }
  />
);

PrivateRoute.propTypes = {
  token: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  component: PropTypes.func.isRequired,
};

export default PrivateRoute;
