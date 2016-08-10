import React from 'react';
import { render } from 'react-dom';

import { Link } from 'react-router'
import { Button, Nav, NavItem, Navbar} from 'react-bootstrap';

class NavBarLeftMenu extends React.Component {
  render () {
    return (
   		<Navbar.Collapse>
	    	<Nav className="side-nav navbar-nav">
	    		<NavItem href="index.html" active>
	    			<i className="fa fa-fw fa-dashboard"></i> Dashboard
	    		</NavItem>
    			<NavItem href="index.html">
	    			<i className="fa fa-fw fa-bar-chart-o"></i> Charts
	    		</NavItem>
	    		<NavItem href="index.html">
	    			<i className="fa fa-fw fa-table"></i> Tables
	    		</NavItem>
	    	</Nav>
    	</Navbar.Collapse>
    );
  }
}

module.exports = NavBarLeftMenu;