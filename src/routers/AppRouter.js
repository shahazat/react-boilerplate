import React from 'react';

import { Router, BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom'

import NotFoundPage from '../components/404NotFound'

import DashboardPage from '../components/DashBoardPage'
import LoginPage from '../components/LoginPage'
import createHistory from 'history/createBrowserHistory';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';


export const history = createHistory();

const AppRouter = () => (
    // <BrowserRouter>
    <Router history={history} >
        <div>
            <Switch> {/** stops at first match */}
                <PublicRoute path="/" component={LoginPage} exact={true} />
                <PrivateRoute path="/dashboard" component={DashboardPage} />
                <Route component={NotFoundPage} />
            </Switch>

        </div>
    </Router>
    // </BrowserRouter>
);

export default AppRouter;