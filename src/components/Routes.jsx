import React from 'react';
import PropTypes from 'prop-types';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import HomePage from './home/HomePage.jsx';
import AboutPage from './about/AboutPage.jsx';

const Routes = () => (
	<Router>
		<div>
			<Route exact path="/" component={HomePage} />
			<Route path="/about" component={AboutPage} />
		</div>
	</Router>
);

export default Routes;