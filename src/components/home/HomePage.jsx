import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const HomePage = props => {
	return (
		<div className="jumbotron">
			<h1>Pluralsight Course</h1>
			<p>React, Redux, and React Router in ES6 for ultra-responsive web apps.</p>
			<Link to="about" className="btn btn-primary btn-lg">Learn More</Link>
		</div>
	);
};

HomePage.PropTypes = {

};

export default HomePage;