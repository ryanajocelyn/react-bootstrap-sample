import React, { PropTypes, Component } from 'react';
import {render, findDOMNode} from 'react-dom';
import { withRouter, Link } from 'react-router'
import 
{	
	FormGroup, 
	ControlLabel, 
	FormControl, 
	InputGroup, 
	Button, Image, Nav, Navbar,
	Grid, Row, Col
} 
from 'react-bootstrap';

import NavBarLogo from './NavBarLogo';
import NavBarTopRightMenu from './NavBarTopRightMenu';
import NavBarLeftMenu from './NavBarLeftMenu';

const Header = withRouter(React.createClass ({

		handleSubmit (event) {
			event.preventDefault();
			
		},
		    
		render () {
			var booleanva = (1 === 1);
			return (
				/*	
				<Navbar inverse={true} fixedTop={true} role="navigation"
				*/
				<nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">	
					<NavBarLogo />
					
					<NavBarTopRightMenu />
					
					<NavBarLeftMenu />
				</nav>	
				/*	
				</Navbar>
				*/
			);
		},
		
		submit(event) {
			
		}
	})
);

module.exports = Header;