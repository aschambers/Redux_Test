// need to import in every component that needs it
import React from 'react';
// Link is used for routing with react-router
import { Link } from 'react-router';

const Single = React.createClass({
	render() {
		return (
			<div className="single-photo">
				I am the single
			</div>
		)
	}
})

export default Single;