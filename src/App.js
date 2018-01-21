import React, { Component } from 'react'
import { Route, NavLink, BrowserRouter } from 'react-router-dom';

import logo from './logo.svg'
import './App.css'
// import MyMapComponent from './components/MapComponent/MapComponent.js'
import TestComponent from './components/TestComponent/TestComponent'
import GeoLocation from './components/GeoLocationComponent/GeoLocationComponent'
import NewsFeed from './components/NewsFeedComponent/NewsFeedComponent';
import NearbyHackathons from './components/NearbyHackthonsComponent/NearbyHackathonsComponent';
import NavBar from './components/NavBarComponent/NavBarComponent';
import FrontSplash from './components/FrontSplashComponent/FrontSplashComponent';

// var style2 ={
//   float: 'right',
//   width: 450px, 
// }

class App extends Component 
{

  constructor(props)
  {
    super(props)

    this.apiUrl = 'http://localhost:8000'
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      signUpFormType: ''
    }
  }


  render() {
    return (
      <div>
        <NavBar firstName={this.state.firstName} lastName={this.state.lastName} email={this.state.email} />
        <FrontSplash/>
      </div>
      // <section className="menu cid-qHhwGVCsKV" once="menu" id="menu1-e">
      //   <BrowserRouter>
      //   <nav className="navbar navbar-expand beta-menu navbar-dropdown align-items-center navbar-fixed-top navbar-toggleable-sm" style={{height: `100px`}}>
      //     <div className="menu-logo" style={{margin: 0}}>
      //       <div className="navbar-brand">
      //         <span className="navbar-caption-wrap"><a className="navbar-caption text-secondary display-2" href="index.html"><img src="assets/images/logo2.png" height="50" left="50%"/></a></span>
      //       </div>
      //     </div>


      //     <div style={{float: `right`, width: `450px`, margin: `auto`, marginRight: 0}}>
      //       <div className="form-group">
      //         <input type="text" className="form-control px-3" name="first name" data-form-field="First name" placeholder="First Name" required="" id="name-header15-12" style={{width: `216px`, margin: `auto`, marginRight: `16px`, marginBottom: `16px`, float: `left`}}/>
      //         <input type="text" className="form-control px-3" name="last name" data-form-field="Last name" placeholder="Last Name" required="" id="name-header15-12" style={{width: `216px`, margin: `auto`, marginRight: 0, marginLeft: 0}}/>
      //       </div>
      //     </div>
      //     <div className="mbr-section-btn" style={{float:`center`,marginRight: 0,justifyContent: `flexStart`, alignItems: `flexStart`}}><NavLink to="/home" className="btn btn-primary display-4" href="hacker.html" 
      //             style={{marginLeft: `16px`, textAlign: `center`, backgroundColor: `#2D3142`, color: `#FFFFFF`, borderColor: `#2D3142`, height: `50px`, float: `right`}}>LOGIN</NavLink>
      //     </div>
      //   </nav>
      //   </BrowserRouter>
      // </section>
      // <BrowserRouter>
      // <div>
      //   <h1>Simple SPA</h1>
      //   <ul className="header">
      //     <li><NavLink to="/">Home</NavLink></li>
      //     <li><NavLink to="/profile">Profile</NavLink></li>
      //     <li><NavLink to="/notifications">Notifications</NavLink></li>
      //     <li><NavLink to="/hackathons">Hackathons</NavLink></li>
      //   </ul>
      //   <div className="content">
      //      <Route exact path="/" component={NewsFeed}/>
      //      <Route path="/profile" component={TestComponent}/>
      //      <Route path="/notifications" component={GeoLocation}/>
      //      <Route path="/hackathons" component={NearbyHackathons}/>
      //   </div>
      // </div>  
      // </BrowserRouter>
    );
  }
}

export default App;
