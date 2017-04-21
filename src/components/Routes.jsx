import React from 'react';
import PropTypes from 'prop-types';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import HomePage from './home/HomePage.jsx';
import AboutPage from './about/AboutPage.jsx';
import CoursesPage from './course/CoursesPage.jsx';

const Routes = props => (
	<Router>
		<div>
			{props.children}
			<Route exact path="/" component={HomePage} />
			<Route path="/courses" component={CoursesPage} />
			<Route path="/about" component={AboutPage} />
		</div>
	</Router>
);

Routes.propTypes = {
	children: PropTypes.object.isRequired
};

export default Routes;