import React, { PropTypes, Component } from 'react';
import {render, findDOMNode} from 'react-dom';
import { withRouter } from 'react-router'
import 
{	
	FormGroup, 
	ControlLabel, 
	FormControl, 
	InputGroup, 
	Button, Image,
	Grid, Row, Col
} 
from 'react-bootstrap';

import Header from '../common/Header';
import Auth from './Auth';

const Login = withRouter(React.createClass ({

		getInitialState() {
			return {
				error: false
			}
		},
		
		handleSubmit (event) {
			event.preventDefault();
			
			var email = findDOMNode(this.refs.email).value;
			var passwd = findDOMNode(this.refs.passwd).value;
			
			Auth.login ('a@a.com', 'pass', (loggedIn) => {
				const { location } = this.props
				
				if (loggedIn) {
					console.log ('routing to dashboard: ' + this.props.router);
					this.props.router.push('/dashboard');
				} else {
					this.props.router.replace('/');
				}
			});
		},
		    
		render () {
			return (
				<Grid>
					<Row className="show-grid">
						<Col sm={6} md={4} mdOffset={4}>
							<h1 className="text-center login-title">Sign In</h1>
							
							<div className="account-wall">	
								<Image className="profile-img" src="/src/client/app/img/login_profile.png?sz=120"
									alt="" rounded />
								<form className="form-signin" onSubmit={this.handleSubmit}>
									<FormGroup>
										<ControlLabel>Email</ControlLabel>
										<FormControl type="email" ref="email"
											placeholder = "Enter username" />
									</FormGroup>
									<FormGroup>
										<ControlLabel>Password</ControlLabel>
										<FormControl type="password" ref="passwd"
											placeholder = "Enter password" />
									</FormGroup>
									<FormGroup>
										<Button type="submit">
											Login
										</Button>
									</FormGroup>
								</form>
							</div>
						</Col>
					</Row>
				</Grid>
			);
		},
		
		submit(event) {
			
		}
	})
);

module.exports = Login;