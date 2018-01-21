import React, { Component } from 'react';
import GeoLocation from '../GeoLocationComponent/GeoLocationComponent';
import Card from '../CardComponent/CardComponent';

import './NearbyHackathonsComponent.css';

const hackathons =[
  {
    'name': 'Fashion/Tech Hackathon',
    'timespan': 'Jan 26th-28th',
    'location': 'Kent, OH'
  },
  {
    'name': 'Hoya Hacks',
    'timespan': 'Jan 26th-28th',
    'location': 'Washington, DC'
  },
  {
    'name': 'SheHacks',
    'timespan': 'Jan 26th-28th',
    'location': 'Boston, MA'
  },
  {
    'name': 'BrickHack', 
    'timespan': 'Jan 27th-28th',
    'location': 'Rochester, NY'
  },
  {
    'name': 'ConUHacks',
    'timespan': 'Jan 27th-28th',
    'location': 'Montreal, QC'
  },
  {
    'name': 'DeltaHacks IV',
    'timespan': 'Jan 27th-28th',
    'location': 'Hamilton, ON'
  },
  {
    'name': 'Devil Hack 1.0.1',
    'timespan': 'Jan27th-28th', 
    'location': 'Gurnee, IL'
  }
  
]

class NearbyHackathons extends Component {
	render() {
		return (
      <div >
        <div style={{display:`inline-block`}} className="CardList">
          {hackathons.map((item, index) => 
              <div className="HackathonCard">
                {item.name} <br/>
                {item.timespan} <br/>
                {item.location}
              </div>
          )}
        </div>
        <div style={{display:`inline-block`, height: `800px`, width:`500px`}}>
  		    <GeoLocation className="GeoLocation"/>
        </div>
      </div>
		);
	}
}

export default NearbyHackathons;