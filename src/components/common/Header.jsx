import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const Header = props => (
	<nav className="">
		<NavLink exact to="/">Home</NavLink>
		{" | "}
		<NavLink to="/courses">Courses</NavLink>
		{" | "}
		<NavLink to="/about">About</NavLink>
	</nav>
);

export default Header;