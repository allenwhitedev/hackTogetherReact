import React, { Component } from 'react'
import { Route, NavLink, BrowserRouter } from 'react-router-dom';

import Background from './swamphacks-bg.jpg';
import './hackathonComponent.css'

class Hackathon extends Component
{
  constructor(props)
  {
    super(props)

    this.state = { isRegistered: false, isSponsoring: false, activeTab: 'About' }

    this.hackathon = 
    { 
      name: 'Swamphacks', 
      startDate: 'Fri Jan 18 2019 18:00:00 GMT-0500 (EST)', 
      endDate: 'Sun Jan 20 2019 18:00:00 GMT-0500 (EST)', 
      school: 'University of Florida', 
      description: 'SwampHacks is a 36 hour open coding event where students become creators. In the time allotted, students from around the country come together at the University of Florida to collaborate on projects, mingle in activities, and network with sponsors for a fully immersive experience.', 
      schedule: [{time: 'Fri Jan 19, 6:00pm', title: 'Check-In + Dinner'}, {time: 'Fri Jan 19, 8:00pm', title: 'Opening Ceremonies'}, {time: 'Fri Jan 19, 9:00pm', title: 'Team Building + Sponsorship Fair'}, {time: 'Fri Jan 19, 11:00pm', title: 'Hacking Begins!'}, {time: 'Sat Jan 20, 4:00am', title: 'Workshop Begins'}, {time: 'Sat Jan 20, 6:00am', title: 'Mid-code Snack'}, {time: 'Sat Jan 20, 8:00am', title: 'Bash Shell Scripting with Professor McCartney'}, {time: 'Sat Jan 20, 11:00am', title: 'Breakfast'}, {time: 'Sat Jan 20, 1:00pm', title: 'Computer Vision Optimization with J.P. Morgan'}, {time: 'Sat Jan 20, 4:00pm', title: 'More Snacks'} ], 
      employerIds: [{employerId: '', joinedDatetime: 'Sun Jan 21 2018 04:33:39 GMT-0500 (EST)'}], 
      hackers: [{hackerId: '5a644d9be6352527eb3941ac', joinedDatetime: 'Sun Jan 21 2018 05:23:19 GMT-0500 (EST)'}], 
      geolocation: {latitude: 29.6479088, longitude: -82.3437601} 
    }
  }

	render() {

    let hackathonEvents = this.hackathon.schedule.map( (event, index) =>
      <li key={index}> <span className='eventTime'> { event.time } </span> <span className='eventTitle'> {event.title} </span> </li> 
      )

		return (
		  <div>
  			<section style={{background: `url(${Background})`}}>
        <div style={{width:`1000px`, height:`500px`,margin: `auto`}}>
    <p style={{paddingTop: `300px`, paddingLeft: `50px`, margin: 0}}><font className="mbr-bold mbr-white display-3">Swamphacks</font></p>
    

  <div className="mbr-section-btn" style={{float:`right`, margin:`auto`, marginLeft: `30px`, alignItems: `flex-start`}}><a className="btn btn-primary display-4" href="hacker.html" style={{textAlign: `center`, backgroundColor: `#2D3142`, color: `#FFFFFF`,  borderColor: `#2D3142`, height: `50px`}}>Sponsor</a>
  </div>

  <div className="mbr-section-btn" style={{float:`right`, margin:`auto`, marginLeft: `30px`, alignItems: `flex-start`}}>
    { !this.state.isRegistered &&
      <a onClick={ () => this.setState({isRegistered: true})} className="btn btn-primary display-4 hackthonRegisterButton" style={{marginRight: `16px`, textAlign: `center`, color: `#FFFFFF`, backgroundColor: `#2D3142`, borderColor: `#2D3142`, height: `50px`}}>Register</a>
    }
    { this.state.isRegistered &&
      <a className="btn btn-primary display-4 hackthonRegisterButton"  style={{marginRight: `16px`, textAlign: `center`, color: `#FFFFFF`, backgroundColor: `transparent`, borderColor: `#fff`, height: `50px`}}>Registered!</a>
    }
  </div>

    <p style={{paddingLeft: `50px`, margin: 0}}><font className="mbr-bold mbr-white" size="6">University of Florida</font></p>

    

    <p style={{paddingLeft: `50px`, paddingRight: `75px`, margin: 0}}><font className="mbr-bold mbr-white" size="4">1/19/18 - 1/21/18</font></p>

  </div>

        </section>
        <ul className='hackathonTabs'>
          <li className={ this.state.activeTab === 'About' ? 'activeHackathonTab' : '' } onClick={ () => this.setState({activeTab: 'About'}) }>About</li>
          <li className={ this.state.activeTab === 'Schedule' ? 'activeHackathonTab' : '' } onClick={ () => this.setState({activeTab: 'Schedule'}) }>Schedule</li>
          <li className={ this.state.activeTab === 'Sponsors' ? 'activeHackathonTab' : '' } onClick={ () => this.setState({activeTab: 'Sponsors'}) }>Sponsors</li>
        </ul>

        { this.state.activeTab === 'About' &&
          <p className='hackathonDescription'> { 
            this.hackathon.description }</p>
        }
        { this.state.activeTab === 'Schedule' &&
          <ul className='hackathonSchedule'>
            {hackathonEvents}
          </ul>
        }
        { this.state.activeTab === 'Sponsors' &&
          <div className='hackathonSponsors'>
            <img  src='http://2018.swamphacks.com/public/img/bahlogo.svg' />
            <img  src='http://2018.swamphacks.com/public/img/jpmorgan.svg' />
            <img  src='http://2018.swamphacks.com/public/img/IEI_logo.svg' />
            <img  src='http://2018.swamphacks.com/public/img/RealTruck-Dark.svg' />
            <img  src='http://2018.swamphacks.com/public/img/homedepot.svg' />
            <img  src='http://2018.swamphacks.com/public/img/amex.svg' />
            <img  src='http://2018.swamphacks.com/public/img/microsoft.svg' />
            <img  src='http://2018.swamphacks.com/public/img/newfblogo.png' />
            <img  src='http://2018.swamphacks.com/public/img/exxon.svg' />
            <img  src='http://2018.swamphacks.com/public/img/pandg.svg' />
            <img  src='http://2018.swamphacks.com/public/img/ultimatesoftware.svg' />
            <img  src='http://2018.swamphacks.com/public/img/gedigital.svg' />
            <img  src='http://2018.swamphacks.com/public/img/Chewy_Logo.png' />
            <img  src='http://2018.swamphacks.com/public/img/linode-logo_standard_light.svg' />
            <img  src='http://2018.swamphacks.com/public/img/sticker-mule.svg' />
            <img  src='http://2018.swamphacks.com/public/img/gocubes.png' />
            <img  src='http://2018.swamphacks.com/public/img/sticker-mule.svg' />
            <img  src='http://2018.swamphacks.com/public/img/kind-logo.svg' />
          </div>
        }
  
		  </div>
);
	}

}

export default Hackathon;