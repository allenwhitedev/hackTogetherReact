import React, { Component } from 'react';
import Signup from '../Signup/Signup.js'
import './frontSplashComponent.css'

class FrontSplash extends Component {

	constructor(props)
	{
		super(props)

		this.state = { userType: 'hacker' }
	}

	render() {
		return (
			<div>
		    <section className="engine"></section>
        <section className="mbr-section info2 cid-qHiuu4iJTy mbr-parallax-background" id="info2-r">
  	    <div className="mbr-overlay" style={{opacity: 0.4, backgroundColor: `#76`}}>
	      </div>

	      <div className="container-fluid backgroundPictureContainer">
	        <div className="row main">
	           
	           <div className="media-container-column col-12 col-lg-2 col-md-4" style={{marginLeft:`15px`}}>
	              <div className="mbr-section-btn align-left py-4">
	              <a onClick={ () => this.setState({userType: 'hacker'}) } className={"btn btn-primary display-4" + (this.state.userType === 'hacker' ? ' active' : '') } ><span className="mbri-github mbr-iconfont mbr-iconfont-btn" style={{fontSize: `50px`, margin: 0}}></span></a>
	              <a onClick={ () => this.setState({userType: 'organizer'}) } className={"btn btn-primary display-4" + (this.state.userType === 'organizer' ? ' active' : '') } ><span className="mbri-globe-2 mbr-iconfont mbr-iconfont-btn" style={{fontSize: `50px`, margin: 0}}></span></a> 
	              <a onClick={ () => this.setState({userType: 'employer'}) } className={"btn btn-primary display-4" + (this.state.userType === 'employer' ? ' active' : '') } ><span className="mbri-user mbr-iconfont mbr-iconfont-btn" style={{fontSize: `50px`, margin: 0}}></span></a></div>
	            </div>
	            
	            <div className="media-container-column title col-12 col-lg-4 col-md-6">

	                <h2 className="align-right mbr-bold mbr-white pb-3 mbr-fonts-style display-2"><br/><br/><br/><br/>Hacker<br/><br/>Organizer<br/><br/>Employer<br/><br/><br/><br/><br/></h2>
	                <h3 className="mbr-section-subtitle align-right mbr-light mbr-white mbr-fonts-style display-5"></h3>
	            </div>

	            <Signup apiUrl={this.props.apiUrl} email={this.props.email} signinUser={this.props.signinUser} userType={this.state.userType} />

	        </div>
	    </div>

	</section>
	</div>
);
	}
}

export default FrontSplash;