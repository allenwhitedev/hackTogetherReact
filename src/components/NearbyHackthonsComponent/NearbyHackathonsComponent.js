import React, { Component } from 'react';
import Map from '../MapComponent/MapComponent.js';

class NearbyHackathons extends Component {
	render() {
		return (
		<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
      </header>

      <TestComponent apiUrl={this.apiUrl} />
      <GeoLocationComponent />
    </div>
		);
	}
}