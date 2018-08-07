import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from '../components/Login/Login';
import FeedPage from '../components/Feed/FeedPage';

export default () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={Login} />
            <Route path="/feed" component={FeedPage} />
        </Switch>
    </ BrowserRouter>
);