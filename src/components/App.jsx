import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router } from 'react-router-dom';

import routes from '../routes/routes';
import Header from './common/Header.jsx';

class App extends React.Component{
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Router>
				<div className="container-fluid">
					<Header />
					{routes}
				</div>
			</Router>
		);
	}
}

App.propTypes = {
};

export default App;
