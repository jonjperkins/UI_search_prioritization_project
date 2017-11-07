import React, { Component } from 'react';
import './App.css';

import {Grid, Row, Col, FormGroup, Checkbox, Table} from 'react-bootstrap';
import moment from 'moment';

class Results extends Component {
  render() {
    return (
    	<Grid>
	  		<Row>
	  			<Col xs={12} sm={10} style={{border: "1px solid #f2f2f2", borderRadius: "3px", marginTop: "20px"}}>
	  			<h2>Results</h2>
	  			{ this.props.error_message.length > 0 &&
	  				<h5 style={{color: "red"}}>{this.props.error_message}</h5>
	  			}
	  			{ (this.props.country.length > 0 || this.props.device.length) > 0 &&
                   
	  				<Table striped bordered condensed hover responsive>
	  					<thead>
					      <tr>
					        <th>First Name</th>
					        <th>Last Name</th>
					        <th>Country</th>
					        <th>Last Login</th>
					      </tr>
					    </thead>
					    <tbody>
		  				{ this.props.results.map((result) => 
		  					<tr>
		  						<td>{result.firstName}</td>
		  						<td>{result.lastName}</td>
		  						<td>{result.country}</td>
		  						<td>{moment(result.lastLogin).format("LLL")}</td>
		  					</tr>
		  					)
		  				}	
		  				</tbody>
	          </Table>

	        }
	        </Col>
	        <Col xsHidden sm={1} />
	  		</Row>
	  	</Grid>
    );
  }
}

export default Results;