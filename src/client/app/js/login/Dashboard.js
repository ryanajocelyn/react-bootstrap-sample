import React, { PropTypes, Component } from 'react';
import {render} from 'react-dom';
import { withRouter } from 'react-router'
import 
{	
	FormGroup, 
	ControlLabel, Label, 
	FormControl, 
	InputGroup, 
	Button, Grid, Row, Col,
	Breadcrumb, PageHeader, Panel
} 
from 'react-bootstrap';

import Header from '../common/Header';
import PanelHeaderFooter from '../custom/PanelHeaderFooter';

class Dashboard extends Component {
	render () {
		return (
			<div id="wrapper">	
				<Header />
				
				<div id="page-wrapper">
					<Grid fluid={true}>
						<Row>
							<Col lg={12}>
								<PageHeader>
									Dashboard <small>Statistics Overview</small>
								</PageHeader>
								<Breadcrumb>
									<Breadcrumb.Item active>
									<i className="fa fa-dashboard"></i> Dashboard
									</Breadcrumb.Item>
								</Breadcrumb>
							</Col>
						</Row>

						<Row>
							<Col lg={3} md={6}>
								<PanelHeaderFooter bsStyle="primary" header={
									<Row>
										<Col xs={3}>
											<i className="fa fa-comments fa-5x"></i>
										</Col>
										<Col xs={9} className="text-right">
											<div className="huge">26</div>
											<div>New Comments!</div>
										</Col>
									</Row>
								} footer={
									<span>	
										<span className="pull-left">View Details</span>
	                                    <span className="pull-right"><i className="fa fa-arrow-circle-right"></i></span>
	                                    <div className="clearfix"></div>
	                                </span>
								} />
							</Col>
							
							<Col lg={3} md={6}>
								<PanelHeaderFooter bsStyle="success" header={
									<Row>
										<Col xs={3}>
											<i className="fa fa-tasks fa-5x"></i>
										</Col>
										<Col xs={9} className="text-right">
											<div className="huge">12</div>
											<div>New Tasks!</div>
										</Col>
									</Row>
								} footer={
									<span>	
										<span className="pull-left">View Details</span>
	                                    <span className="pull-right"><i className="fa fa-arrow-circle-right"></i></span>
	                                    <div className="clearfix"></div>
	                                </span>
								} />
							</Col>

							<Col lg={3} md={6}>
								<PanelHeaderFooter bsStyle="warning" header={
									<Row>
										<Col xs={3}>
											<i className="fa fa-shopping-cart fa-5x"></i>
										</Col>
										<Col xs={9} className="text-right">
											<div className="huge">124</div>
											<div>New Orders!</div>
										</Col>
									</Row>
								} footer={
									<span>	
										<span className="pull-left">View Details</span>
	                                    <span className="pull-right"><i className="fa fa-arrow-circle-right"></i></span>
	                                    <div className="clearfix"></div>
	                                </span>
								} />
							</Col>

							<Col lg={3} md={6}>
								<PanelHeaderFooter bsStyle="danger" header={
									<Row>
										<Col xs={3}>
											<i className="fa fa-support fa-5x"></i>
										</Col>
										<Col xs={9} className="text-right">
											<div className="huge">13</div>
											<div>Support Tickets!</div>
										</Col>
									</Row>
								} footer={
									<span>	
										<span className="pull-left">View Details</span>
	                                    <span className="pull-right"><i className="fa fa-arrow-circle-right"></i></span>
	                                    <div className="clearfix"></div>
	                                </span>
								} />
							</Col>

						</Row>
					</Grid>
	             </div>
			</div>
		);
	}
};

module.exports = Dashboard;