import React, { Component } from 'react'
import { Route, NavLink, BrowserRouter } from 'react-router-dom';

import Background from './swamphacks-bg.jpg';
class Hackathon extends Component
{

	render() {
		return (
			<div>
			<section style={{background: `url(${Background})`}}>

  <div style={{width:`1000px`, height:`500px`,margin: `auto`}}>
    <p style={{paddingTop: `300px`, paddingLeft: `50px`, margin: 0}}><font className="mbr-bold mbr-white display-3">Swamphacks</font></p>
    

  <div className="mbr-section-btn" style={{float:`right`, margin:`auto`, marginLeft: `30px`, alignItems: `flex-start`}}><a className="btn btn-primary display-4" href="hacker.html" style={{textAlign: `center`, backgroundColor: `#2D3142`, color: `#FFFFFF`,  borderColor: `#2D3142`, height: `50px`}}>Sponsor</a>
  </div>

  <div className="mbr-section-btn" style={{float:`right`, margin:`auto`, marginLeft: `30px`, alignItems: `flex-start`}}><a className="btn btn-primary display-4" href="hacker.html" style={{marginRight: `16px`, textAlign: `center`, backgroundColor: `#2D3142`, color: `#FFFFFF`,  borderColor: `#2D3142`, height: `50px`}}>Register</a>
  </div>

    <p style={{paddingLeft: `50px`, margin: 0}}><font className="mbr-bold mbr-white" size="6">University of Florida</font></p>

    

    <p style={{paddingLeft: `50px`, paddingRight: `75px`, margin: 0}}><font className="mbr-bold mbr-white" size="4">1/19/18 - 1/21/18</font></p>

  </div>

  
</section>

<div style={{height: `100%`, width: `85%`, margin: `auto`}}>
  
<dl className="accordion" style={{margin: 0}}>
  <dt className="accordion__title">About</dt>
  <dd className="accordion__content" style={{height: `100%`, display: `none`}}>
    <h1 style={{textAlign: `center`}}>About Swamphacks</h1>
    <p style={{textAlign: `justify`}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porttitor lacus vitae gravida accumsan. Suspendisse vulputate diam in nibh accumsan feugiat. Etiam sit amet tincidunt mauris. Ut a fringilla leo. Maecenas nec tempus leo. Fusce sollicitudin, lorem a tincidunt cursus, nisi nunc tristique leo, non lobortis tellus arcu ac nisi. Pellentesque suscipit posuere augue quis lacinia. Morbi pulvinar consectetur elit ut dictum. Sed vel diam velit. Nunc arcu metus, luctus a mattis ac, accumsan non ipsum. Sed id nisi non felis iaculis commodo. Sed sed dui quis sapien rutrum ullamcorper. Quisque luctus neque urna, ac tempor ligula condimentum suscipit.</p>

    <h1 style={{textAlign: `center`}}>Statistics</h1>
    <div style={{display: `flex`, justifyContent: `space-between`}}>
      <img src="assets/images/piechart.png" style={{height: `300px`}}/>
      <img src="assets/images/circlechart.png" style={{height: `300px`}}/>
      <img src="assets/images/chart.png" style={{height: `300px`}}/>
    </div>
  </dd>
  <dt className="accordion__title">Schedule</dt>
  <dd className="accordion__content" style={{height: `100%`, display: `none`, textAlign:`center`}}>
    <h1>Schedule</h1>
    <p>Friday</p>
        <ul>
          <li>6:00pm - 8:00pm - Check-In and Dinner</li>
          <li>8:00pm - 9:00pm - Opening Ceremony</li>
          <li>9:00pm - 10:00pm - Team Building</li>
        </ul>
    <p>Saturday</p>
    <p>Sunday</p>

  </dd>
  <dt className="accordion__title">Sponsors</dt>
  <dd className="accordion__content" style={{height: `100%`, textAlign: `center`, display: `none`}}>
    <h1>Sponsors</h1>
    <img src="assets/images/jpmorgan.svg"/>
    <img src="assets/images/IEI_logo.svg"/>
    <img src="assets/images/RealTruck-Dark.svg"/>
    <img src="assets/images/homedepot.svg"/>
    <img src="assets/images/amex.svg"/>
  </dd>

  <dt className="accordion__title">Feed</dt>
  <dd className="accordion__content" style={{height: `100%`, display: `none`}}>
    <h1 style={{textAlign: `center`}}>Feed</h1>

    <div style={{width: `40%`, backgroundColor: `#F7F7F7`, margin: `auto`, float: `left`, marginLeft: `50px`}}>
      
      <tbody>
        <tr><td><b>Attendees</b></td></tr>
        <tr><td>Brian just registered</td></tr>
        <tr><td>Faizon just registered</td></tr>
        <tr><td>Immanuel just registered</td></tr>
        <tr><td>Aimee just registered</td></tr>
        <tr><td>Braxton just registered</td></tr>
        <tr><td>Charlie just registered</td></tr>
      </tbody>

    </div>

    <div style={{width: `40%`, backgroundColor: `#F7F7F7`, margin: `auto`, float: `right`, textAlign: `right`, marginRight: `50px`}}>
      
      <tbody style={{float: `right`}}>
        <tr><td><b>Hackathon</b></td></tr>
        <tr><td>Organizer just updated schedule</td></tr>
        <tr><td>Home Depot is now a sponsor</td></tr>
        <tr><td>Location has been updated</td></tr>
        <tr><td>Organizer has updated About page</td></tr>
        <tr><td>Facebook is now a sponsor</td></tr>
        <tr><td>Seth has been added as a sponsor</td></tr>
        <tr><td>Samantha has been added as a volunteer</td></tr>
      </tbody>

    </div>

  </dd>

  <dt className="accordion__title">FAQs</dt>
  <dd className="accordion__content" style={{height: `100%`, display: `inline-block`}}>
    <h1 style={{textAlign: `center`}}>FAQs</h1>

    <div style={{display: `flex`, marginTop: `30px`, justifyContent: `space-between`}}>
      
      <div style={{height: `350px`, width: `350px`, backgroundColor: `#F7F7F7`, padding: `10px`, border: `5px solid #12130F`, marginTop: `30px`, float: `left`}}>
      <h1><b>What is a hackathon?</b></h1>
      <p style={{textAlign: `justify`}}>A hackathon is best described as an “invention marathon”. Anyone who has an interest in technology attends a hackathon to learn, build & share their creations over the course of a weekend in a relaxed and welcoming atmosphere. You don’t have to be a programmer and you certainly don’t have to be majoring in Computer Science.</p>
    </div>

    <div style={{height: `350px`, width: `350px`, backgroundColor: `#F7F7F7`, padding: `10px`, border: `5px solid #12130F`, marginTop: `30px`, float: `center`}}>
      <h1><b>What is a hackathon?</b></h1>
      <p style={{textAlign: `justify`}}>A hackathon is best described as an “invention marathon”. Anyone who has an interest in technology attends a hackathon to learn, build & share their creations over the course of a weekend in a relaxed and welcoming atmosphere. You don’t have to be a programmer and you certainly don’t have to be majoring in Computer Science.</p>
    </div>
    <div style={{height: `350px`, width: `350px`, backgroundColor: `#F7F7F7`, padding: `10px`, border: `5px solid #12130F`, marginTop: `30px`, float: `center`}}>
      <h1><b>What is a hackathon?</b></h1>
      <p style={{textAlign: `justify`}}>A hackathon is best described as an “invention marathon”. Anyone who has an interest in technology attends a hackathon to learn, build & share their creations over the course of a weekend in a relaxed and welcoming atmosphere. You don’t have to be a programmer and you certainly don’t have to be majoring in Computer Science.</p>
    </div>

    </div>

    <div style={{display: `flex`,  marginTop: `30px`, justifyContent: `space-between`}}>
      
    <div style={{height: `350px`, width: `350px`, backgroundColor: `#F7F7F7`, padding: `10px`, border: `5px solid #12130F`, marginTop: `30px`, float: `left`}}>
      <h1><b>What is a hackathon?</b></h1>
      <p style={{textAlign: `justify`}}>A hackathon is best described as an “invention marathon”. Anyone who has an interest in technology attends a hackathon to learn, build & share their creations over the course of a weekend in a relaxed and welcoming atmosphere. You don’t have to be a programmer and you certainly don’t have to be majoring in Computer Science.</p>
    </div>
   <div style={{height: `350px`, width: `350px`, backgroundColor: `#F7F7F7`, padding: `10px`, border: `5px solid #12130F`, marginTop: `30px`, float: `center`}}>
      <h1><b>What is a hackathon?</b></h1>
      <p style={{textAlign: `justify`}}>A hackathon is best described as an “invention marathon”. Anyone who has an interest in technology attends a hackathon to learn, build & share their creations over the course of a weekend in a relaxed and welcoming atmosphere. You don’t have to be a programmer and you certainly don’t have to be majoring in Computer Science.</p>
    </div>
<div style={{height: `350px`, width: `350px`, backgroundColor: `#F7F7F7`, padding: `10px`, border: `5px solid #12130F`, marginTop: `30px`, float: `center`}}>
      <h1><b>What is a hackathon?</b></h1>
      <p style={{textAlign: `justify`}}>A hackathon is best described as an “invention marathon”. Anyone who has an interest in technology attends a hackathon to learn, build & share their creations over the course of a weekend in a relaxed and welcoming atmosphere. You don’t have to be a programmer and you certainly don’t have to be majoring in Computer Science.</p>
    </div>


    </div>

  </dd>

  <dt className="accordion__title"><a href="hackathon.html">+</a></dt>
  
</dl>

</div>

<div style={{width: `85%`, height: `250px`, backgroundColor: `#696755`, margin:`auto`, marginTop: `30px`}}>
  
  <p style={{textAlign: `center`}}>Maps Goes Here</p>

</div>
			</div>
);
	}

}

export default Hackathon;