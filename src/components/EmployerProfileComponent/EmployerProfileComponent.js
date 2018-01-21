import React, { Component } from 'react'
import { Route, NavLink, BrowserRouter } from 'react-router-dom';

import Background from './profile-cover-amex.png';
import PiChart from './pichart.png';

class EmployerProfile extends Component
{

	render() {
		return (
			<div>
			<section style={{backgroundImage: `url(${Background})`, marginTop: `100px`}}>

			  <div style={{width:`95%`,height:`500px`,margin: `auto`}}>
			    

			  <div className="mbr-section-btn" style={{float:`right`, margin:`auto`, marginLeft: `30px`, alignItems: `flex-start`}}><a className="btn btn-primary display-4" href="hacker.html" style={{textAlign: `center`, backgroundColor: `#2D3142`, color: `#FFFFFF`,  borderColor: `#2D3142`, height: `50px`}}>Edit Profile</a>
			  </div>
			  	<br/>
			  	<br/>
			  	<br/>
			  	<br/>
			  	<br/>
			  	<br/>
			  	<br/>
			  	<br/>
			  	<br/>
			  	<br/>
			  	<br/>

			    <p style={{paddingTop: `270px`, margin: `auto`, fontColor: `black`, textAlign: `center`}}><font className="mbr-bold mbr-black display-3" size="8">American Express</font></p>
			    <p style={{margin: `auto`, fontSize: 20, fontColor: `black`, textAlign: `center`}}><font className="mbr-bold mbr-black">Specialties: Fintech, Big Data, Machine Learning</font></p>

			  </div>

			</section>

			<div style={{height: `700px`, marginLeft: `50px`, marginTop: `200px`, display: `inline-block`}}>
			    <h1> SwampHacks: Language Preferences </h1>
				<img src="assets/images/pichart.png" style={{border: `1px black solid`, margin: `auto`, height: `475px`}}/>
				<img src="assets/images/attendee-graduation-graph.png" style={{border: `1px black solid`, margin: `auto`, height: `475px`, marginLeft: `300px`}}/>

			</div>
			</div>
);
	}

}

export default EmployerProfile;