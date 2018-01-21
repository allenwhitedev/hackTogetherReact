import React, { Component } from 'react'
import './testComponent.css'

class TestComponent extends Component
{
	constructor(props)
	{
		super(props)
	
		this.state = { myGetTestValueFromAPI: 'No value from GET /test route of API yet' }
	}

	componentDidMount()
	{
		fetch( this.props.apiUrl + '/test' ).then( response => response.json() ).then( (data) =>
		{
			this.setState({ myGetTestValueFromAPI: data.message })
		})

		let body = { myKey: 'myKey value from React app' }

		fetch( this.props.apiUrl + '/test', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) } )
			.then( response => response.json() ).then( (data) =>
		{
			this.setState({ myPostTestValueFromAPI: data.message })
		}).catch( (err) => console.log(err) )
	}

	render()
	{
		return <div className='TestComponent'>
			<h2> This is the Test Component html </h2>
			<h4> Here is the message from the GET /test route: {this.state.myGetTestValueFromAPI} </h4>
			<h4> Here is the message from the POST /test route: {this.state.myPostTestValueFromAPI} </h4>
		</div>
	}

}

export default TestComponent