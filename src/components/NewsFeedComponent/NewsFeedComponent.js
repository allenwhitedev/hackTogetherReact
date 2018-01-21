import React, { Component } from 'react';
import NewsFeedBlock from '../NewsFeedBlockComponent/NewsFeedBlock';

class NewsFeed extends Component {
	render() {
		return (
			// <div style={{marginTop: `125px`, marginLeft: `auto`, marginRight: `auto`, display: `flex`, width: `700px`, flexWrap: `wrap`, flexDirection: `column`, justifyContent: `center`}}>
			// 	<img src="assets/images/news1.png" style={{backgroundColor: `white`}}/>
			// 	<img src="assets/images/news2.png" style={{backgroundColor: `white`}}/>
			// 	<img src="assets/images/news3.png" style={{backgroundColor: `white`}}/>
			// </div>
			<section>
			<div style={{width:`700px`, margin: `auto`, marginTop: `100px`, marginBottom: `1000px`}}>
      
      <div>
        <img src="assets/images/news1.png" style={{marginTop: `20px`}}/>
        <p style={{height: `60px`, width: `700px`, backgroundColor: `#FFFFFF`, marginTop: `5px`}}>
          <a href=""><img src="assets/images/heart.png" style={{height: `50px`, marginLeft: `150px`}}/><font color="black">Like</font></a>
          <a href=""><img src="assets/images/comment.png" style={{height: `50px`, marginLeft: `100px`}}/><font color="black">Comment</font></a>
          <a href=""><img src="assets/images/save.jpg" style={{height: `50px`, marginLeft: `100px`}}/><font color="black">Share</font></a>
        </p>
      </div>
 		<div>
        <img src="assets/images/news2.png" style={{marginTop: `20px`}}/>
        <p style={{height: `60px`, width: `700px`, backgroundColor: `#FFFFFF`, marginTop: `5px`}}>
          <a href=""><img src="assets/images/heart.png" style={{height: `50px`, marginLeft: `150px`}}/><font color="black">Like</font></a>
          <a href=""><img src="assets/images/comment.png" style={{height: `50px`, marginLeft: `100px`}}/><font color="black">Comment</font></a>
          <a href=""><img src="assets/images/save.jpg" style={{height: `50px`, marginLeft: `100px`}}/><font color="black">Share</font></a>
        </p>
      </div>
 		<div>
        <img src="assets/images/news3.png" style={{marginTop: `20px`}}/>
        <p style={{height: `60px`, width: `700px`, backgroundColor: `#FFFFFF`, marginTop: `5px`}}>
          <a href=""><img src="assets/images/heart.png" style={{height: `50px`, marginLeft: `150px`}}/><font color="black">Like</font></a>
          <a href=""><img src="assets/images/comment.png" style={{height: `50px`, marginLeft: `100px`}}/><font color="black">Comment</font></a>
          <a href=""><img src="assets/images/save.jpg" style={{height: `50px`, marginLeft: `100px`}}/><font color="black">Share</font></a>
        </p>
      </div>

     
      </div>
      </section>
			);
	}
}

export default NewsFeed;