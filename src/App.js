import React, { Component } from 'react';
import CriteriaSelection from './CriteriaSelection';
import Results from './Results';
import './App.css';

import {Grid, Row, Col} from 'react-bootstrap';
var ReactDOM = require("react-dom");

class App extends Component {
  constructor() {
    super();
    this.state = {
      country: [],
      device: [],
      results: [],
      key: 0
    }
    this.handleUpdateCountry = this.handleUpdateCountry.bind(this);
    this.handleUpdateDevice = this.handleUpdateDevice.bind(this);
    this.handleUpdateResults = this.handleUpdateResults.bind(this);
  }
  handleUpdateCountry(event) {
    var checkboxValue = event.target.value;
    var currentCountryState = this.state.country;

    console.log('checkbox value: ' + checkboxValue)

    if ( currentCountryState.length === 1 && currentCountryState.indexOf(checkboxValue) > -1  ) {
      this.setState({ country: [] }, this.forceUpdate() )
    } 

    else if ( checkboxValue !== "ALL" && currentCountryState.indexOf("ALL") > -1 ) {
      checkboxValue = [checkboxValue]
      this.setState({ country: checkboxValue }, this.handleUpdateResults) 
    } 
    
    else if ( checkboxValue === "ALL" && currentCountryState.indexOf("ALL") === -1 ) {
      this.setState({ country: ["ALL"] }, this.handleUpdateResults) 
    } 

    else if (currentCountryState.indexOf(checkboxValue) === -1 && currentCountryState.indexOf("ALL") === -1 && currentCountryState.length > 0) {
      this.setState({ country: [...currentCountryState, checkboxValue]}, this.handleUpdateResults)
    }

    else if (currentCountryState.indexOf(checkboxValue) > -1 && currentCountryState.indexOf("ALL") === -1) {
      var index = currentCountryState.indexOf(checkboxValue);
      currentCountryState.splice(index, 1);
      var newCountryState = currentCountryState
      this.setState({ country: newCountryState }, this.handleUpdateResults) 
    }

    else if (currentCountryState.indexOf("ALL") > -1 && checkboxValue === "ALL") {
      this.setState({ country: [] }, this.handleUpdateResults);
    }
  
    else {
      checkboxValue = [checkboxValue]
      this.setState({ country: checkboxValue }, this.handleUpdateResults) 
    }
  }
  handleUpdateDevice(event) {
    this.setState({ device: event.target.value });
  }
  handleUpdateResults() {
    console.log(JSON.stringify({ country: this.state.country, device: this.state.device }))
    var request = new Request("http://localhost:8080/", {
      method: "POST",
      headers: new Headers({
        "Accept": "application/json",
        "Content-Type": "application/json"
      }),
      body: JSON.stringify({ country: this.state.country, device: this.state.device })
    });
    fetch(request)
    .then((response) => {
      response.text().then(text => {
        var testerArray = JSON.parse(text)
        this.setState({ results: testerArray})
      })
    })
  }
  render() {
    return (
      <Grid>
        <Row>
          <Col sm={10} smOffset={1}>
            <CriteriaSelection 
              handleUpdateDevice={this.handleUpdateDevice} 
              handleUpdateCountry={this.handleUpdateCountry}
              handleUpdateResults={this.handleUpdateResults}
              country={this.state.country}
              />
          </Col>
        </Row>
        <Row>
          <Col sm={10} smOffset={1}>
              <Results 
                results={this.state.results}
                country={this.state.country}
                device={this.state.device}
                />
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;
