// need to import in every component that needs it
import React from 'react';
// Link is used for routing with react-router
import { Link } from 'react-router';

const Single = React.createClass({
	render() {
		return (
			<div className="single-photo">
				<pre>
					{JSON.stringify(this.props.posts,null,'')}
				</pre>
			</div>
		)
	}
})

export default Single;