import React from 'react';
import PropTypes from 'prop-types';
// import { BrowserRouter as Router } from 'react-router-dom';

import routes from '../routes/routes';
import Header from './common/Header.jsx';

class App extends React.Component{
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="container-fluid">
				<Header />
				{routes}
			</div>
		);
	}
}

App.propTypes = {
};

export default App;
