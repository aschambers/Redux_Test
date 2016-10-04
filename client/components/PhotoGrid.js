// need to import in every component that needs it
import React from 'react';
// import Photo
import Photo from './Photo';

const PhotoGrid = React.createClass({
	render() {
		return (
			<div className="photo-grid">
				{/* need to create commponent for that specific one instead of looping over like this */}
				{/* <pre>
					{JSON.stringify(this.props.posts,null,'')}
				</pre> */}
				{/* use arrow function to import Photo component, and pass down props */}
				{/* also each child needs a unique key such as the index, and pass index value
				that goes along with it, and lastly we need posts to pass down specific info
				about that particular post */}
				{this.props.posts.map((post, i) => <Photo {...this.props} key={i} i={i} post={post}/>)}
			</div>
		)
	}
})

export default PhotoGrid;