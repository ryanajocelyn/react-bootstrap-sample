import React from 'react';
import { render } from 'react-dom';

import { Link } from 'react-router'
import { Button, Nav, NavDropdown, MenuItem, Media } from 'react-bootstrap';

class NavBarTopRightMenu extends React.Component {
  render () {
    return (
    	<Nav pullRight className="navbar-right top-nav">
    		<NavDropdown eventKey={1} id="navbar-right-menu-item" title={
    				<span><i className="fa fa-envelope"></i></span>
    		}>
    			<MenuItem eventKey='1'>
    				<Media>
    					<Media.Left>
    						<img width={50} height={50} src="http://placehold.it/50x50" />
    					</Media.Left>
    					<Media.Body>
    						<Media.Heading>
    							John Smith
    						</Media.Heading>
							<p className="small text-muted"><i className="fa fa-clock-o"></i> Yesterday at 4:32 PM</p>
		                    <p>Lorem ipsum dolor sit amet, consectetur...</p>	
    					</Media.Body>
    				</Media>
    			</MenuItem>
    		</NavDropdown>

    		<NavDropdown eventKey={2} id="navbar-right-menu-item" title={
    				<span><i className="fa fa-bell"></i></span>
    		}>
    			<MenuItem eventKey='1' href="#">
    				Alert Name <span className="label label-default">Alert Badge</span>
    			</MenuItem>
    			<MenuItem eventKey='2' href="#">
					Alert Name <span className="label label-primary">Alert Badge</span>
				</MenuItem>
				<MenuItem eventKey='3' href="#">
					Alert Name <span className="label label-success">Alert Badge</span>
				</MenuItem>
				<MenuItem eventKey='4' href="#">
					Alert Name <span className="label label-info">Alert Badge</span>
				</MenuItem>
				<MenuItem eventKey='5' href="#">
					Alert Name <span className="label label-warning">Alert Badge</span>
				</MenuItem>
				<MenuItem eventKey='6' href="#">
					Alert Name <span className="label label-danger">Alert Badge</span>
				</MenuItem>
				<MenuItem eventKey='7' className="divider" />
				<MenuItem eventKey='8' href="#">
					View All
				</MenuItem>
    		</NavDropdown>

    		<NavDropdown eventKey={3} id="navbar-right-menu-item" title={
    				<span><i className="fa fa-user"></i>  Abijeeth Darwin</span>
    		}>
    			<MenuItem eventKey='1' href="#">
    				<i className="fa fa-fw fa-user"></i> Profile
    			</MenuItem>
     			<MenuItem eventKey='2' href="#">
     				<i className="fa fa-fw fa-envelope"></i> Inbox
				</MenuItem>
				<MenuItem eventKey='3' href="#">
					<i className="fa fa-fw fa-gear"></i> Settings
				</MenuItem>
				<MenuItem eventKey='4' href="#">
					<i className="fa fa-fw fa-power-off"></i> Log Out
				</MenuItem>
    		</NavDropdown>
    	</Nav>
    );
  }
}

module.exports = NavBarTopRightMenu;