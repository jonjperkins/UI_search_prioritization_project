import React, { Component } from 'react';
import './App.css';

import {Grid, Row, Col, FormGroup, Checkbox} from 'react-bootstrap';

class Results extends Component {
  render() {
    return (
    	<Grid>
	  		<Row>
	  			<h2>Results</h2>

	  			{ (this.props.country.length > 0 || this.props.device.length) > 0 &&
                  
	  				<ul>
		  				{ this.props.results.map((result) => 
		  					<li> {result.firstName} </li>
		  					)
		  				}	
	          </ul>

	        }
	  		</Row>
	  	</Grid>
    );
  }
}

export default Results;