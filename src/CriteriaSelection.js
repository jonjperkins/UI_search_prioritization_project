import React, { Component } from 'react';
import './App.css';

import {Grid, Row, Col, FormGroup, Checkbox} from 'react-bootstrap';

class CriteriaSelection extends Component {
	shouldBeChecked(value, type) {
		if (type === "country") {
			return this.props.country.indexOf(value) > -1;
		} else {
			return this.props.device.indexOf(value) > -1;
		}
  }
  render() {
    return (
    	<Grid>
	  		<Row>
	  			<Col xs={12} sm={3}>
	  				<h2>Country</h2>
						<FormGroup style={{fontSize: ".9em"}}>
							<Col>
			    			<Checkbox 
			    				inline 
		    					onChange={this.props.handleUpdateCountry}
		    					value="ALL"
		    					checked={this.shouldBeChecked("ALL", "country")}
		    					disabled={this.shouldBeChecked("ALL", "country")}>
		      					See All
		    				</Checkbox>
			    		</Col>
						 	<Col>
		    				<Checkbox 
		    					inline 
		    					onChange={this.props.handleUpdateCountry}
		    					value="US"
		    					checked={this.shouldBeChecked("US", "country")}>
		      				United States
		    				</Checkbox>
		    			</Col>
		    			<Col>
		    				<Checkbox 
		    					inline 
		    					onChange={this.props.handleUpdateCountry} 
		    					value="JP"
									checked={this.shouldBeChecked("JP", "country")}>
		      					Japan
		    				</Checkbox>
		    			</Col>
		    			<Col>
		    				<Checkbox 
		    					inline 
		    					onChange={this.props.handleUpdateCountry} 
		    					value="GB"
		    					checked={this.shouldBeChecked("GB", "country")}>
		      					Great Britain
		    				</Checkbox>
		    			</Col>
		  				</FormGroup>
	  			</Col>
	  			<Col xs={4} sm={2}>
	  				<FormGroup style={{fontSize: ".9em"}}>
	  				<h2>Device</h2>
		  				<Col>
			    				<Checkbox 
				    				inline 
			    					onChange={this.props.handleUpdateDevice}
			    					value="ALL"
			    					checked={this.shouldBeChecked("ALL", "device")}
			    					disabled={this.shouldBeChecked("ALL", "device")}>
			      					See All
			    				</Checkbox>
			    		</Col>
						 	<Col>
		    				<Checkbox 
		    					inline
		    					onChange={this.props.handleUpdateDevice}
		    					value="iPhone_4"
		    					checked={this.shouldBeChecked("iPhone_4", "device")}>
		      					iPhone 4
		    				</Checkbox>
		    			</Col>
		    			<Col>
		    				<Checkbox
		    					inline
		    					onChange={this.props.handleUpdateDevice}
		    					value="iPhone_4S"
		    					checked={this.shouldBeChecked("iPhone_4S", "device")}>
		      					iPhone 4s
		    				</Checkbox>
		    			</Col>
		    			<Col>
		    				<Checkbox
		    					inline
		    					onChange={this.props.handleUpdateDevice}
		    					value="iPhone_5"
		    					checked={this.shouldBeChecked("iPhone_5", "device")}>
		      					iPhone 5
		    				</Checkbox>
		    			</Col>
	  				</FormGroup>
	  			</Col>
	  			<Col xs={4} sm={2}>
	  				<FormGroup style={{fontSize: ".9em"}}>
						 	<Col style={{paddingTop: "64px"}}>
		    				<Checkbox
		    					inline
		    					onChange={this.props.handleUpdateDevice}
		    					value="Galaxy_S3"
		    					checked={this.shouldBeChecked("Galaxy_S3", "device")}>
		      					Galaxy S3
		    				</Checkbox>
		    			</Col>
		    			<Col>
		    				<Checkbox
		    					inline
		    					onChange={this.props.handleUpdateDevice}
		    					value="Galaxy_S4"
		    					checked={this.shouldBeChecked("Galaxy_S4", "device")}>
			      				Galaxy S4
		    				</Checkbox>
		    			</Col>
		    			<Col>
		    				<Checkbox
		    					inline
		    					onChange={this.props.handleUpdateDevice}
		    					value="Nexus_4"
		    					checked={this.shouldBeChecked("Nexus_4", "device")}>
			      				Nexus 4
		    				</Checkbox>
		    			</Col>
	  				</FormGroup>
	  			</Col>
	  			<Col xs={4} sm={2}>
	  				<FormGroup style={{fontSize: ".9em"}}>
						 	<Col style={{paddingTop: "64px"}}>
		    				<Checkbox
		    					inline
		    					onChange={this.props.handleUpdateDevice}
		    					value="Droid_Razor"
		    					checked={this.shouldBeChecked("Droid_Razor", "device")}>
			      				Droid Razor
		    				</Checkbox>
		    			</Col>
		    			<Col>
		    				<Checkbox
		    					inline
		    					onChange={this.props.handleUpdateDevice}
		    					value="Droid_DNA"
		    					checked={this.shouldBeChecked("Droid_DNA", "device")}>
			      				Droid DNA
		    				</Checkbox>
		    			</Col>
		    			<Col>
		    				<Checkbox
		    					inline
		    					onChange={this.props.handleUpdateDevice}
		    					value="HTC_One"
		    					checked={this.shouldBeChecked("HTC_One", "device")}>
			      				HTC One
		    				</Checkbox>
		    			</Col>
		    			<Col>
		    				<Checkbox
		    					inline
		    					onChange={this.props.handleUpdateDevice}
		    					value="iPhone_3"
		    					checked={this.shouldBeChecked("iPhone_3", "device")}>
			      				iPhone 3
		    				</Checkbox>
		    			</Col>
	  				</FormGroup>
	  			</Col>
	  			<Col sm={2} />
	  		</Row>
	  	</Grid>
    );
  }
}

export default CriteriaSelection;
