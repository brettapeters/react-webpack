import React from 'react';
import { Route } from 'react-router-dom';

import HomePage from '../components/home/HomePage.jsx';
import AboutPage from '../components/about/AboutPage.jsx';
import CoursesPage from '../components/course/CoursesPage.jsx';

const routes = [
	<Route exact path="/" component={HomePage} key={0}/>,
	<Route path="/courses" component={CoursesPage} key={1}/>,
	<Route path="/about" component={AboutPage} key={2}/>
];

export default routes;