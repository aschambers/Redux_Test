// need to import in every component that needs it
import React from 'react';
// import Photo component
import Photo from './Photo';
// import comments
import Comments from './Comments';

const Single = React.createClass({
	render() {
		const { postId } = this.props.params;
		{/* log the actual index console.log(i); */}
		// index of the post
		const i = this.props.posts.findIndex((post) => post.code === this.props.params.postId);
		{/* console.log(i); */}
		// get us the post to pass to the photo
		const post = this.props.posts[i];
		{/* console.log(post); */}
		const postComments = this.props.comments[postId] || [];
		{/* console.log(postComments) */}
		return (
			<div className="single-photo">
				<Photo i={i} post={post} {...this.props} />
				<Comments postComments={postComments} {...this.props} />
			</div>
		)
	}
})

export default Single;