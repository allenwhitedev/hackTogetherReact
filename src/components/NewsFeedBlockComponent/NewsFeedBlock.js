import React, { Component } from 'react';
import './NewsFeedBlock.css';

class NewsFeedBlock extends Component {
	render() {
		return (
			<div className='NewsFeedBlock'> 
				<div className='NewsFeedPicture'>
					<img src="assets/images/brian.jpg" style={{height: `150px`}}/>
				</div>
				<div className='NewsFeedContent'>
				</div>
				<div className='NewsFeedIcons'>

				</div>
			</div>);
	}
}

export default NewsFeedBlock;