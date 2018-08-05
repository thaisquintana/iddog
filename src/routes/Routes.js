import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from '../components/Login/Login';
import FeedPage from '../components/Feed/FeedPage';
import HuskyPage from '../components/Categories/HuskyPage/HuskyPage';
import HoundPage from '../components/Categories/HoundPage/HoundPage';
import LabradorPage from '../components/Categories/LabradorPage/LabradorPage';
import PugPage from '../components/Categories/PugPage/PugPage';

export default () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={Login} />
            <Route path="/feed" component={FeedPage} />
            <Route path="/husky" component={HuskyPage} />
            <Route path="/labrador" component={LabradorPage} />
            <Route path="/hound" component={HoundPage} />
            <Route path="/pug" component={PugPage} />
        </Switch>
    </ BrowserRouter>
);