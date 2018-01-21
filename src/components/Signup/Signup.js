import React, { Component } from 'react'
import './signup.css'
import 'react-router-dom';
import { Redirect } from 'react-router';

class Signup extends Component 
{

	constructor(props)
	{
		super(props)

		this.state = {email: '', firstName: '', lastName: '', school: 'University of Florida', employmentSeeking: 'Part-Time', jobPosition: 'Software Developer', resume: 'standardResume'}
	}

	componentDidMount()
	{
		console.log('this.props.apiUrl', this.props.apiUrl)
		if ("geolocation" in navigator) 
		{
			navigator.geolocation.getCurrentPosition( (position) =>
			{
			  this.setState({ latitude: position.coords.latitude, longitude: position.coords.longitude })
			})
		}
		else
		{
			console.log('geolocation IS NOT available')
		}
	}

	submitSignup()
	{
		console.log('submitSignup log here')
		if ( !this.state.email || !this.state.firstName || !this.state.lastName || !this.state.school || !this.state.employmentSeeking || !this.state.jobPosition || !this.state.resume )
			return alert('All fields are required to signup')
		else
		{
			let stringifiedBody = JSON.stringify({ type: 'hacker', email: this.state.email, firstName: this.state.firstName, lastName: this.state.lastName, school: this.state.school, 
				employmentSeeking: this.state.employmentSeeking, jobPosition: this.state.jobPosition, resume: this.state.resume, geolocation: { latitude: this.state.latitude, longitude: this.state.longitude } })
			fetch(this.props.apiUrl + '/signup', { method: 'POST', headers: {'Content-Type': 'application/json'}, body: stringifiedBody })
				.then( response => response.json() ).then( (data) =>
				{
					this.props.signinUser(data)
					console.log('data:', data)
				})			
		}
	}

	render()
	{
		let signupFormBody = null
		
		if ( this.props.email )
			return <Redirect to='/' />

		if ( !this.props.email )
			signupFormBody = <form id='signupFormHacker' onSubmit={ (e) => { e.preventDefault(); this.submitSignup('hacker') } } className="mbr-form"> 
	        <div data-for="name">
	            <div className="form-group">
	                <input value={this.state.firstName} onChange={ (e) => this.setState({firstName: e.target.value})} type="text" className="form-control px-3" name="first name" data-form-field="First name" placeholder="First Name" required="" id="name-header15-12" style={{width: `48%`, float: `left`, marginRight: `16px`, marginBottom: `16px`}}/>
	                <input value={this.state.lastName} onChange={ (e) => this.setState({lastName: e.target.value})} type="text" className="form-control px-3" name="last name" data-form-field="Last name" placeholder="Last Name" required="" id="name-header15-12" style={{width: `48%`, float: `right`}}/>
	            </div>
	        </div>
	        <div data-for="email">
	            <div className="form-group">
	                <input value={this.state.email} onChange={ (e) => this.setState({email: e.target.value})} type="email" className="form-control px-3" name="email" data-form-field="Email" placeholder="Email" required="" id="email-header15-12"/>
	            </div>
	        </div>
	        <div data-for="password">
	            <div className="form-group">
	                <input type="password" className="form-control px-3" name="password" data-form-field="Password" placeholder="Password" id="phone-header15-12"/>
	            </div>
	        </div>	        
				
				<section className='extraSignupInputs'>

					<select className='schoolSignupInput' name='school' value={this.state.school} onChange={ (e) => this.setState({school: e.target.value})} >
						<option>University of Florida</option>
						<option>University of Central Florida</option>
						<option>Florida State University</option>
						<option>Georgia State University</option>
						<option>Georgia Institute of Technology</option>
						<option>None</option>
					</select>

					<select name='employmentSeeking' value={this.state.employmentSeeking} onChange={ (e) => this.setState({employmentSeeking: e.target.value})} >
						<option>Part-Time</option>
						<option>Full-Time</option>
						<option>Internship/Co-Op</option>
						<option>Not Seeking Employment</option>
					</select>

					<select name='jobPosition' value={this.state.jobPosition} onChange={ (e) => this.setState({jobPosition: e.target.value})} >
						<option>Software Developer</option>
						<option>Data Scientist</option>
						<option>Systems Engineer</option>
						<option>Machine Learning Engineer</option>
						<option>Computer Vision Architect</option>
					</select>
				
				</section>

	        <div onClick={ () => this.submitSignup() } className="mbr-section-btn align-left py-4"><a className="btn btn-primary display-4" style={{marginLeft: `35%`, textAlign: `center`}}>LET&#39;S GO</a>
	        </div>
	      </form>

		return(
			<div className="media-container-column col-12 col-lg-5">
	      
	      <br/>
				{signupFormBody}
			</div>
		)
	}
}

export default Signup