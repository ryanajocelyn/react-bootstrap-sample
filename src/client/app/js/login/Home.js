import React from 'react';
import {render} from 'react-dom';
import {browserHistory, Router, Route, Link, withRouter, IndexRoute} from 'react-router';

import Header from '../common/Header';

const Home = React.createClass({
	render () {
		return (
			<div>
				<ul>
					<li><Link to="/login">Sign In</Link></li>
				</ul>
				{this.props.children}		
			</div>
		);
	}
});


module.exports = Home;