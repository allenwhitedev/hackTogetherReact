import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
// import MyMapComponent from './components/MapComponent/MapComponent.js'
import TestComponent from './components/TestComponent/TestComponent'
import GeoLocation from './components/GeoLocationComponent/GeoLocationComponent'
import NewsFeed from './components/NewsFeedComponent/NewsFeedComponent';
import { Route, NavLink, HashRouter } from 'react-router-dom';

class App extends Component 
{

  constructor(props)
  {
    super(props)

    this.apiUrl = 'http://localhost:8000'
  }


  render() {
    return (
      <HashRouter>
      <div>
        <h1>Simple SPA</h1>
        <ul className="header">
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/profile">Stuff</NavLink></li>
          <li><NavLink to="/notifications">Contact</NavLink></li>
        </ul>
        <div className="content">
           <Route path="/" component={NewsFeed}/>
           <Route path="/profile" component={TestComponent}/>
           <Route path="/notifications" component={GeoLocation}/>
        </div>
      </div>  
      </HashRouter>
    );
  }
}

export default App;
