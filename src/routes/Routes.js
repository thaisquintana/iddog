import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PrivateRoute from '../containers/PrivateRoute';
import Login from '../containers/Login';
import FeedPage from '../containers/FeedPage';
import NotFound from '../components/NotFound/NotFound';


export default () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={Login} />
            <PrivateRoute path="/feed" component={FeedPage} />
            <PrivateRoute path="*" component={NotFound} />
        </Switch>
    </ BrowserRouter>
);