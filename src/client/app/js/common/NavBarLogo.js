import React from 'react';
import { render } from 'react-dom';

import { Link } from 'react-router'
import { Navbar, NavbarHeader, NavbarToggle } from 'react-bootstrap';

class NavBarLogo extends React.Component {
  render () {
    return (
    	 <Navbar.Header>
    	 	<Navbar.Brand>
    	 		<Navbar.Toggle />
    	 		<Link className="brandname-color" to="/dashboard">SB Admin</Link>
            </Navbar.Brand>
         </Navbar.Header>
    );
  }
}

module.exports = NavBarLogo;