import React, { Component } from 'react'
// import logo from './logo.svg' // TBA: *will use lightbulb logo
import './App.css'
// import MyMapComponent from './components/MapComponent/MapComponent.js'
import TestComponent from './components/TestComponent/TestComponent'
import GeoLocation from './components/GeoLocationComponent/GeoLocationComponent'
import NewsFeed from './components/NewsFeedComponent/NewsFeedComponent';
import Signup from './components/Signup/Signup.js'
import { Route, NavLink, BrowserRouter } from 'react-router-dom';

class App extends Component 
{

  constructor(props)
  {
    super(props)

    this.apiUrl = 'http://localhost:8000'

    this.state = { email: false }

    this.signinUser = this.signinUser.bind(this)
  }

  signinUser(data)
  {
    let userData = data.ops[0]
    if ( userData )
      this.setState({ email: userData.email, firstName: userData.firstName, lastName: userData.lastName, school: userData.school, employmentSeeking: userData.employmentSeeking, jobPosition: userData.jobPosition,
        resume: userData.resume, geolocation: { longitude: userData.geolocation.longitude, latitude: userData.geolocation.latitude } })
  }


  render() {
    return (
      <BrowserRouter>
      <div>
        <h1>Simple SPA</h1>
        <ul className="header">
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/profile">Stuff</NavLink></li>
          <li><NavLink to="/notifications">Contact</NavLink></li>
          <li><NavLink to='/signup'>Signup</NavLink></li>
        </ul>
        <div className="content">
           <Route path="/" component={NewsFeed}/>
           <Route path="/profile" render={ () => <TestComponent apiUrl={this.apiUrl} /> } />
           <Route path="/notifications" component={GeoLocation}/>
           <Route path='/signup' render={ () => <Signup apiUrl={this.apiUrl} email={this.state.email} signinUser={this.signinUser} /> } />
        </div>
      </div>  
      </BrowserRouter>
    );
  }
}

export default App;
