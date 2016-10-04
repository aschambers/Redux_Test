// need to import in every component that needs it
import React from 'react';
// Link is used for routing with react-router
import { Link } from 'react-router';

const PhotoGrid = React.createClass({
	render() {
		return (
			<div className="photo-grid">
				I am the photo-grid.
			</div>
		)
	}
})

export default PhotoGrid;