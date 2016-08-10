import React, { Component, PropTypes } from 'react';
import {render} from 'react-dom';
import {browserHistory, Router, Route, Link, withRouter, IndexRoute} from 'react-router';

import Login from './login/Login';
import Home from './login/Home';
import Dashboard from './login/Dashboard';
import Auth from './login/Auth';

export default class Root extends Component {
  render() {
    return (
        <div>
            <Router history={browserHistory}>
              <Route path='/' component={Home} />
              <Route path='/login' component={Login} />
              <Route path='/dashboard' component={Dashboard} onEnter={requireAuth} />
            </Router>
        </div>
    );
  }
  
};

function requireAuth(nextState, replace) {
	if (!Auth.loggedIn()) {
		replace({
			pathname: '/login'
		})
	}
}