import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PrivateRoute from '../containers/PrivateRoute';
import Login from '../containers/Login';
import FeedPage from '../containers/FeedPage';

export default () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={Login} />
            <PrivateRoute path="/feed" component={FeedPage} />
        </Switch>
    </ BrowserRouter>
);