import React, { Component } from 'react';
import './App.css';

import {Grid, Row, Col, FormGroup, Checkbox} from 'react-bootstrap';

class CriteriaSelection extends Component {
  render() {
    return (
    	<Grid>
	  		<Row>
	  		<h2>Country</h2>
	  			<Col xs={12}>
					 <FormGroup>
					 <Col>
	    				<Checkbox 
	    					inline 
	    					onChange={this.props.handleUpdateCountry}
	    					value="ALL"
	    					checked={ this.props.country.indexOf("ALL") > -1 }>
	      				See All
	    				</Checkbox>
	    			</Col>
					 	<Col>
	    				<Checkbox 
	    					inline 
	    					onChange={this.props.handleUpdateCountry}
	    					value="US"
	    					checked={ this.props.country.indexOf("US") > -1 }>
	      				United States
	    				</Checkbox>
	    			</Col>
	    			<Col>
	    				<Checkbox 
	    					inline 
	    					onChange={this.props.handleUpdateCountry} 
	    					value="JP"
	    					checked={ this.props.country.indexOf("JP") > -1 }
	    					ref={(countries) => this.countries = countries}
	    					>
	      					Japan
	    				</Checkbox>
	    			</Col>
	    			<Col>
	    				<Checkbox 
	    					inline 
	    					onChange={this.props.handleUpdateCountry} 
	    					value="GB"
	    					checked={ this.props.country.indexOf("GB") > -1 }
	    					>
	      				Great Britain
	    				</Checkbox>
	    			</Col>
	  				</FormGroup>
	  			</Col>
	  		</Row>
	  		<Row>
	  		<h2>Device</h2>
	  			<Col xs={4}>
	  				<FormGroup>
	  				<Col>
		    				<Checkbox inline>
		      				See All
		    				</Checkbox>
		    			</Col>
					 	<Col>
	    				<Checkbox inline>
	      				iPhone 4
	    				</Checkbox>
	    			</Col>
	    			<Col>
	    				<Checkbox inline>
	      				iPhone 4s
	    				</Checkbox>
	    			</Col>
	    			<Col>
	    				<Checkbox inline>
	      				iPhone 5
	    				</Checkbox>
	    			</Col>
	  				</FormGroup>
	  			</Col>
	  			<Col xs={4}>
	  				<FormGroup>
						 	<Col>
		    				<Checkbox inline>
		      				Galaxy S3
		    				</Checkbox>
		    			</Col>
		    			<Col>
		    				<Checkbox inline>
		      				Galaxy S4
		    				</Checkbox>
		    			</Col>
		    			<Col>
		    				<Checkbox inline>
		      				Nexus 4
		    				</Checkbox>
		    			</Col>
	  				</FormGroup>
	  			</Col>
	  			<Col xs={4}>
	  				<FormGroup>
						 	<Col>
		    				<Checkbox inline>
		      				Droid Razor
		    				</Checkbox>
		    			</Col>
		    			<Col>
		    				<Checkbox inline>
		      				Droid DNA
		    				</Checkbox>
		    			</Col>
		    			<Col>
		    				<Checkbox inline>
		      				HTC One
		    				</Checkbox>
		    			</Col>
		    			<Col>
		    				<Checkbox inline>
		      				iPhone 3
		    				</Checkbox>
		    			</Col>
	  				</FormGroup>
	  			</Col>
	  		</Row>
	  	</Grid>
    );
  }
}

export default CriteriaSelection;
