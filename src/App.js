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
      country: ["ALL"],
      device: ["ALL"],
      results: [],
      key: 0, 
      error_message: ""
    }
    this.handleUpdateCountry = this.handleUpdateCountry.bind(this);
    this.handleUpdateDevice = this.handleUpdateDevice.bind(this);
    this.handleUpdateResults = this.handleUpdateResults.bind(this);
  }
  componentDidMount() {
    this.handleUpdateResults();
  }
  handleUpdateResults() {
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
        if (testerArray[0].error === "error") {
          this.setState({ error_message: testerArray[1].message })
        } else {
          this.setState({ results: testerArray, error_message: false })
        }
      })
    })
  }
  handleUpdateCountry(event) {
    var checkboxValue = event.target.value;
    var currentCountryState = this.state.country;
    if ( currentCountryState.length === 1 && currentCountryState.indexOf(checkboxValue) > -1  ) {
        this.setState({ country: ["ALL"] }, this.handleUpdateResults) 
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
      console.log("delete");
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
    var checkboxValue = event.target.value;
    var currentDeviceState = this.state.device;
    if ( currentDeviceState.length === 1 && currentDeviceState.indexOf(checkboxValue) > -1  ) {
      this.setState({ device: ["ALL"] }, this.handleUpdateResults)
    } 
    else if ( checkboxValue !== "ALL" && currentDeviceState.indexOf("ALL") > -1 ) {
      checkboxValue = [checkboxValue]
      this.setState({ device: checkboxValue }, this.handleUpdateResults) 
    } 
    else if ( checkboxValue === "ALL" && currentDeviceState.indexOf("ALL") === -1 ) {
      this.setState({ device: ["ALL"] }, this.handleUpdateResults) 
    } 
    else if (currentDeviceState.indexOf(checkboxValue) === -1 && currentDeviceState.indexOf("ALL") === -1 && currentDeviceState.length > 0) {
      this.setState({ device: [...currentDeviceState, checkboxValue]}, this.handleUpdateResults)
    }
    else if (currentDeviceState.indexOf(checkboxValue) > -1 && currentDeviceState.indexOf("ALL") === -1) {
      var index = currentDeviceState.indexOf(checkboxValue);
      currentDeviceState.splice(index, 1);
      var newDeviceState = currentDeviceState
      this.setState({ device: newDeviceState }, this.handleUpdateResults) 
    }
    else if (currentDeviceState.indexOf("ALL") > -1 && checkboxValue === "ALL") {
      this.setState({ device: [] }, this.handleUpdateResults);
    }
    else {
      checkboxValue = [checkboxValue]
      this.setState({ device: checkboxValue }, this.handleUpdateResults) 
    }
  }
  render() {
    return (
      <Grid>
        <Row>
          <Col xsHidden sm={1} />
          <Col xs={12} sm={10}>
            <Row>
              <div style={{border: "1px solid #edeeef", borderRadius: "3px", marginTop: "20px", backgroundColor: "#f7f7f7"}}>
                <CriteriaSelection 
                  handleUpdateDevice={this.handleUpdateDevice} 
                  handleUpdateCountry={this.handleUpdateCountry}
                  handleUpdateResults={this.handleUpdateResults}
                  country={this.state.country}
                  device={this.state.device}
                  />
              </div>
            </Row>
            <Row>
              <Results 
                results={this.state.results}
                country={this.state.country}
                device={this.state.device}
                error_message={this.state.error_message}
                />
            </Row>
          </Col>
          <Col xsHidden sm={1} />
        </Row>
      </Grid>
    );
  }
}

export default App;
