import React, { Component } from 'react'
import { Route, NavLink, BrowserRouter } from 'react-router-dom';

import logo from './logo.svg'

import './App.css'
// import MyMapComponent from './components/MapComponent/MapComponent.js'
import GeoLocation from './components/GeoLocationComponent/GeoLocationComponent'
import NewsFeed from './components/NewsFeedComponent/NewsFeedComponent';
import NearbyHackathons from './components/NearbyHackthonsComponent/NearbyHackathonsComponent';
import NavBar from './components/NavBarComponent/NavBarComponent';
import FrontSplash from './components/FrontSplashComponent/FrontSplashComponent';
import Signup from './components/Signup/Signup.js'
import Profile from './components/ProfileComponent/ProfileComponent';
import Hackathon from './components/HackathonComponent/HackathonComponent';

class App extends Component 
{

  constructor(props)
  {
    super(props)

    this.apiUrl = 'http://localhost:8000'
    this.state = {
      firstName: null,
      lastName: null,
      email: null,
      signUpFormType: 'Hacker',
      isUserLoggedIn: false
    }

    this.logInUser = this.logInUser.bind(this)
    this.signinUser = this.signinUser.bind(this)
  }

  logInUser(data)
  {
    this.setState({email: data.email});
  }  

  signinUser(data)
  {
    let userData = data.ops[0]
    if ( userData ) {
      this.setState({ email: userData.email, firstName: userData.firstName, lastName: userData.lastName, school: userData.school, employmentSeeking: userData.employmentSeeking, jobPosition: userData.jobPosition,
        resume: userData.resume, geolocation: { longitude: userData.geolocation.longitude, latitude: userData.geolocation.latitude } });
    }
  }


  render() {
    if(this.state.email){
      return (
            <BrowserRouter>

        <div>
      <section className="menu cid-qHhwGVCsKV" once="menu" id="menu1-e">
          <nav className="navbar navbar-expand beta-menu navbar-dropdown align-items-center navbar-fixed-top navbar-toggleable-sm" style={{height: `100px`, backgroundColor: `#2D3142`}}>         
            <div className="menu-logo" style={{margin: 0}}>
              <div className="navbar-brand">
                <span className="navbar-caption-wrap">
                  <NavLink to="/" className="navbar-caption text-secondary display-2">
                    <img src="assets/images/logo2-white.png" height="50" left="50%"/>
                  </NavLink>
                </span>
              </div>
            </div>
            <input type="text" className="form-control px-3" name="searchbar" data-form-field="Search Bar" placeholder="Search" style={{width: `600px`, float: `left`}}/>
            
              <div style={{marginLeft: `30px`, width: `800px`}}>
                <NavLink to="/profile"><img src="assets/images/profile.png" style={{marginLeft: `30px`, height: `28px`}}/></NavLink>
                <NavLink to="#"><img src="assets/images/message.png" style={{marginLeft: `30px`, height: `28px`}}/></NavLink>
                <NavLink to="/notifications"><img src="assets/images/notifs.png" style={{marginLeft: `30px`, height: `28px`}}/></NavLink>
                <NavLink to="/hackathons"><img src="assets/images/laptop.png" style={{marginLeft: `30px`, height: `28px`}}/></NavLink>
                
                <NavLink to="/"><img src="assets/images/standby.png" style={{marginRight: `30px`, height: `28px`, float: `right`}}/></NavLink>
              </div>
          </nav>
        </section>    
                
                <div className="content">
                   <Route exact path="/" component={NewsFeed}/>
                   <Route path="/profile" component={Profile}/>
                   <Route path="/notifications" component={GeoLocation}/>
                   <Route path="/hackathons" component={Hackathon}/>
                </div>
        </div>
            </BrowserRouter>

        );
    }
    return (
      <div>
        <NavBar firstName={this.state.firstName} lastName={this.state.lastName} email={this.state.email} logInUser={this.logInUser}/>
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
//       <BrowserRouter>
//       <div>
//         <h1>Simple SPA</h1>
//         <ul className="header">
//           <li><NavLink to="/">Home</NavLink></li>
//           <li><NavLink to="/profile">Stuff</NavLink></li>
//           <li><NavLink to="/notifications">Contact</NavLink></li>
//           <li><NavLink to='/signup'>Signup</NavLink></li>
//         </ul>
//         <div className="content">
//            <Route path="/" component={NewsFeed}/>
//            <Route path="/profile" render={ () => <TestComponent apiUrl={this.apiUrl} /> } />
//            <Route path="/notifications" component={GeoLocation}/>
//            <Route path='/signup' render={ () => <Signup apiUrl={this.apiUrl} email={this.state.email} signinUser={this.signinUser} /> } />
//         </div>
//       </div>  
//       </BrowserRouter>
    );
  }
}

export default App;
