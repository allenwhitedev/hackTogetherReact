import React, { Component } from 'react'
import { Route, NavLink, BrowserRouter } from 'react-router-dom';

class NavBar extends Component {

  constructor(props)
  {
    super(props);
    this.state = {
      email: '',
      password: ''
    }
  }

  submitLogin() 
  {
    if(!this.state.email || !this.state.password) 
    {
      return alert('You need both fields to log in');
    }
  }

  render() {
    if(this.props.firstName || this.props.lastName || this.props.email) {
      return (<div> Signed In </div>);
    }
    return (
        <section className="menu cid-qHhwGVCsKV" once="menu" id="menu1-e">
          <BrowserRouter>

          <nav className="navbar navbar-expand beta-menu navbar-dropdown align-items-center navbar-fixed-top navbar-toggleable-sm" style={{height: `100px`}}>
            <div className="menu-logo" style={{margin: 0}}>
              <div className="navbar-brand">
                <span className="navbar-caption-wrap"><a className="navbar-caption text-secondary display-2" href="index.html"><img src="assets/images/logo2.png" height="50" left="50%"/></a></span>
              </div>
            </div>
            <div style={{float: `right`, width: `450px`, margin: `auto`, marginRight: 0}}>
              <div className="form-group">
                <input type="text" className="form-control px-3" name="first name" data-form-field="First name" placeholder="Email" value={this.state.email} onChange={(e) => this.setState({email: e.target.value})} required="" id="name-header15-12" style={{width: `216px`, margin: `auto`, marginRight: `16px`, marginBottom: `16px`, float: `left`}}/>
                <input type="password" className="form-control px-3" name="last name" data-form-field="Last name" placeholder="Password" value={this.state.password} onChange={(e) => this.setState({password: e.target.value})} required="" id="name-header15-12" style={{width: `216px`, margin: `auto`, marginRight: 0, marginLeft: 0}}/>
              </div>
            </div>
            <div className="mbr-section-btn" style={{float:`center`,marginRight: 0,justifyContent: `flexStart`, alignItems: `flexStart`}}>
              <NavLink to="/home" className="btn btn-primary display-4" 
                  style={{marginLeft: `16px`, textAlign: `center`, backgroundColor: `#2D3142`, color: `#FFFFFF`, borderColor: `#2D3142`, height: `50px`, float: `right`}}
                  onClick={() => this.submitLogin()}>
                  LOGIN
              </NavLink>
            </div>
          </nav>
          </BrowserRouter>
        </section>
      );
  }
}

export default NavBar;