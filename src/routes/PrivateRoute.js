import React from 'react';
import { Route, Redirect } from 'react-router';

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

export default PrivateRoute;
