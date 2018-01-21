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
           <Route path='/signup' render={ () => <Signup apiUrl={this.apiUrl} /> } />
        </div>
      </div>  
      </BrowserRouter>
    );
  }
}

export default App;
