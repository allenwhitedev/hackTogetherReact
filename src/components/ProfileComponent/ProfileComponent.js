import React, { Component } from 'react'
import { Route, NavLink, BrowserRouter } from 'react-router-dom';

// import NearbyHackathons from '../NearbyHackathonsComponent/NearbyHackathonsComponent';
import Background from '../../profile-cover.png';
import NearbyHackathons from '../NearbyHackthonsComponent/NearbyHackathonsComponent';

class Profile extends Component
{

	render() {
		return (
			<div>
			<section style={{backgroundImage: `url(${Background})`, marginTop: `100px`}}>

			  <div style={{width:`95%`,height:`500px`,margin: `auto`}}>
			    <p style={{paddingTop: `270px`, paddingLeft: `30px`, margin: 0}}><font className="mbr-bold mbr-white display-3">Brian Cabigon</font></p>
			    

			  <div className="mbr-section-btn" style={{float:`right`, margin:`auto`, marginLeft: `30px`, alignItems: `flex-start`}}><a className="btn btn-primary display-4" href="hacker.html" style={{textAlign: `center`, backgroundColor: `#2D3142`, color: `#FFFFFF`,  borderColor: `#2D3142`, height: `50px`}}>Edit Profile</a>
			  </div>

			    <p style={{paddingLeft: `50px`, margin: 0, fontSize: 20}}><font className="mbr-bold mbr-white">Georgia State University</font></p>

			  </div>

			</section>

			<div style={{height: `500px`, width: `90%`, margin: `auto`, marginTop: `30px`}}>
			    
			    // <NearbyHackathons />

			</div>
			</div>
);
	}

}

export default Profile;