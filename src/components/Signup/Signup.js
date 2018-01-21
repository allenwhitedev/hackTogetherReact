import React, { Component } from 'react'
import './signup.css'
import 'react-router-dom';
import { Redirect } from 'react-router';

class Signup extends Component 
{

	constructor(props)
	{
		super(props)

		this.state = {email: '', firstName: '', lastName: '', school: 'University of Florida', employmentSeeking: 'Part-Time', jobPosition: 'Software Developer', resume: ''}
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
			signupFormBody = <form className='Signup' onSubmit={ (e) => { e.preventDefault(); this.submitSignup('hacker') } } >
				<h3>This is the Signup component</h3>

				<label htmlFor='email'>Email </label>
				<input name='email' type='text' value={this.state.email} onChange={ (e) => this.setState({email: e.target.value})} />

				<label htmlFor='firstName'>First Name </label>
				<input name='firstName' type='text' value={this.state.firstName} onChange={ (e) => this.setState({firstName: e.target.value})} />
				<label htmlFor='lastName'>Last Name </label>
				<input name='lastName' type='text' value={this.state.lastName} onChange={ (e) => this.setState({lastName: e.target.value})} />

				<select name='school' value={this.state.school} onChange={ (e) => this.setState({school: e.target.value})} >
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
				
				<label htmlFor='resume'>Resume</label>
				<input name='resume' type='file' onChange={ (e) => { console.log('e.target.value', e.target.value); this.setState({ resume: e.target.value.split('\\').pop() }) } } />	

				<button type='submit'>Submit</button>

			</form>


		return(
			<div className='Signup'>
				{signupFormBody}
			</div>
		)
	}
}

export default Signup