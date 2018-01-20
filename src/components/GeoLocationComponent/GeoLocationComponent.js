import React, { Component } from 'react';
import { geolocated } from 'react-geolocated';
import MapComponent from '../MapComponent/MapComponent.js'

class GeoLocation extends Component {
  render() {
    return !this.props.isGeolocationAvailable
      ? <div>Your browser does not support Geolocation</div>
      : !this.props.isGeolocationEnabled
        ? <div>Geolocation is not enabled</div>
        : this.props.coords
          ? <MapComponent isMarkerShown={true} lat={this.props.coords.latitude} lng={this.props.coords.longitude}/>
          : <div>Getting the location data&hellip; </div>;
  }
}

export default geolocated({
	positionOptions: {
		enableHighAccuracy: false,
	},
})(GeoLocation);