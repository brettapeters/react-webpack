import React from 'react';
import PropTypes from 'prop-types';

import Routes from './Routes.jsx';

class App extends React.Component{
	constructor() {
		super();
	}

	render() {
		return (
			<div className="container-fluid">
				<p>Header here...</p>
				<Routes />
			</div>
		);
	}
}

App.propTypes = {
	// children: PropTypes.object.isRequired
};

export default App;