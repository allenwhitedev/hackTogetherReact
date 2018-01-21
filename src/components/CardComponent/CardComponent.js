import React, { Component } from 'react';
import './CardComponent.css';

class Card extends Component {
	
	constructor(props) {

		super(props);

		this.style = {
			height: this.props.height,
			width: this.props.width
			};
	
	}
	render() {
		return <div style={this.style} className='Card'> {this.props.content} </div>
	}
}

export default Card;