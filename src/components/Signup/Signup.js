import React, { Component } from 'react'
import './signup.css'
import 'react-router-dom';
import { Redirect } from 'react-router';

class Signup extends Component 
{

	constructor(props)
	{
		super(props)

		this.state = {
			email: '', firstName: '', lastName: '', school: 'University of Florida', employmentSeeking: 'Part-Time', jobPosition: 'Software Developer', resume: 'standardResume',
			employerName: '', jobPositionRoleOne: 'Software Developer (Part-Time)', jobPositionQuantityOne: 1, jobPositionRoleTwo: 'Computer Vision Architect (Intern/Co-Op)', 
			jobPositionQuantityTwo: 1, jobPositionRoleThree: 'Data Scientist (Full-Time)', jobPositionQuantityThree: 1 
		} 
	}

	componentDidMount()
	{
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
		if ( this.props.userType === 'hacker' && (!this.state.email || !this.state.firstName || !this.state.lastName || !this.state.school || !this.state.employmentSeeking || !this.state.jobPosition || !this.state.resume) )
			return alert('All fields are required to signup, hacker')
		else if ( this.props.userType === 'employer' && (!this.state.email || !this.state.employerName || !this.state.jobPositionRoleOne || !this.state.jobPositionRoleTwo || !this.state.jobPositionRoleThree || !this.state.jobPositionQuantityOne || !this.state.jobPositionQuantityTwo || !this.state.jobPositionQuantityThree) )
		{
			console.log("can't submit employer yet, a field is missing is, here are the fields", this.state.email, this.state.employerName, this.state.jobPositionRoleOne, this.state.jobPositionRoleTwo, this.state.jobPositionRoleThree, this.state.jobPositionQuantityOne, this.state.jobPositionQuantityTwo, this.state.jobPositionQuantityThree )
			return alert('All fields are required to signup, employer')
		}
		else if ( this.props.userType )
		{
			let stringifiedBody =  null

			if ( this.props.userType === 'hacker' )
				stringifiedBody = JSON.stringify({ type: this.props.userType, email: this.state.email, firstName: this.state.firstName, lastName: this.state.lastName, school: this.state.school, 
					employmentSeeking: this.state.employmentSeeking, jobPosition: this.state.jobPosition, resume: this.state.resume, geolocation: { latitude: this.state.latitude, longitude: this.state.longitude } })
			else if ( this.props.userType === 'employer' )
				stringifiedBody = JSON.stringify({ type: this.props.userType, email: this.state.email, employerName: this.state.employerName, jobPositionRoleOne: this.state.jobPositionRoleOne, 
					jobPositionRoleTwo: this.state.jobPositionRoleOne, jobPositionRoleThree: this.state.jobPositionRoleOne, jobPositionQuantityOne: this.state.jobPositionQuantityOne, 
					jobPositionQuantityTwo: this.state.jobPositionQuantityTwo, jobPositionQuantityThree: this.state.jobPositionQuantityThree, geolocation: { latitude: this.state.latitude, longitude: this.state.longitude } })

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
			return <Redirect to='/profile' />

		if ( !this.props.email && this.props.userType === 'hacker' )
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
	  else if ( this.props.userType === 'employer' )
	    signupFormBody = <form id='signupFormHacker' onSubmit={ (e) => { e.preventDefault(); this.submitSignup('hacker') } } className="mbr-form"> 
	        <div data-for="name">
	            <div className="form-group">
	                <input value={this.state.employerName} onChange={ (e) => this.setState({employerName: e.target.value})} type="text" className="form-control px-3" name="first name" data-form-field="First name" placeholder="Business Name" required="" id="name-header15-12" style={{float: `left`, marginRight: `16px`, marginBottom: `16px`}}/>
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

					<h3 className='signupInputsLabel'> Roles you are seeking </h3>

					<input value={this.state.jobPositionQuantityOne} onChange={ (e) => this.setState({jobPositionQuantityOne: e.target.value})} className='jobPositionNumberField' type='number' min='1' max='99' />
					<select value={this.state.jobPositionRoleOne} onChange={ (e) => this.setState({jobPositionRoleOne: e.target.value}) } >
						<option>Software Developer (Part-Time)</option>
						<option>Software Developer (Full-Time)</option>
						<option>Software Developer (Intern/Co-Op)</option>
						<option>Data Scientist (Part-Time)</option>
						<option>Data Scientist (Full-Time)</option>
						<option>Data Scientist (Intern/Co-Op)</option>
						<option>Systems Engineer (Part-Time)</option>
						<option>Systems Engineer (Full-Time)</option>
						<option>Systems Engineer (Intern/Co-Op)</option>
						<option>Machine Learning Engineer (Part-Time)</option>
						<option>Machine Learning Engineer (Full-Time)</option>
						<option>Machine Learning Engineer (Intern/Co-Op)</option>
						<option>Computer Vision Architect (Part-Time)</option>
						<option>Computer Vision Architect (Full-Time)</option>
						<option>Computer Vision Architect (Intern/Co-Op)</option>
					</select>
					<br />					

					<input value={this.state.jobPositionQuantityTwo} onChange={ (e) => this.setState({jobPositionQuantityTwo: e.target.value})} className='jobPositionNumberField' type='number' min='1' max='99' />
					<select name='jobPosition' value={this.state.jobPositionRoleTwo} onChange={ (e) => this.setState({jobPositionRoleTwo: e.target.value}) } >
						<option>Software Developer (Part-Time)</option>
						<option>Software Developer (Full-Time)</option>
						<option>Software Developer (Intern/Co-Op)</option>
						<option>Data Scientist (Part-Time)</option>
						<option>Data Scientist (Full-Time)</option>
						<option>Data Scientist (Intern/Co-Op)</option>
						<option>Systems Engineer (Part-Time)</option>
						<option>Systems Engineer (Full-Time)</option>
						<option>Systems Engineer (Intern/Co-Op)</option>
						<option>Machine Learning Engineer (Part-Time)</option>
						<option>Machine Learning Engineer (Full-Time)</option>
						<option>Machine Learning Engineer (Intern/Co-Op)</option>
						<option>Computer Vision Architect (Part-Time)</option>
						<option>Computer Vision Architect (Full-Time)</option>
						<option>Computer Vision Architect (Intern/Co-Op)</option>
					</select>

					<br />
					<input value={this.state.jobPositionQuantityThree} onChange={ (e) => this.setState({jobPositionQuantityThree: e.target.value})} className='jobPositionNumberField' type='number' min='1' max='99' /> 
					<select name='jobPosition' value={this.state.jobPositionRoleThree} onChange={ (e) => this.setState({jobPositionRoleThree: e.target.value}) } >
						<option>Software Developer (Part-Time)</option>
						<option>Software Developer (Full-Time)</option>
						<option>Software Developer (Intern/Co-Op)</option>
						<option>Data Scientist (Part-Time)</option>
						<option>Data Scientist (Full-Time)</option>
						<option>Data Scientist (Intern/Co-Op)</option>
						<option>Systems Engineer (Part-Time)</option>
						<option>Systems Engineer (Full-Time)</option>
						<option>Systems Engineer (Intern/Co-Op)</option>
						<option>Machine Learning Engineer (Part-Time)</option>
						<option>Machine Learning Engineer (Full-Time)</option>
						<option>Machine Learning Engineer (Intern/Co-Op)</option>
						<option>Computer Vision Architect (Part-Time)</option>
						<option>Computer Vision Architect (Full-Time)</option>
						<option>Computer Vision Architect (Intern/Co-Op)</option>
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