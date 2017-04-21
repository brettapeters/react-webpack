import React from 'react';
import PropTypes from 'prop-types';

import Routes from './Routes.jsx';
import Header from './common/Header.jsx';

class App extends React.Component{
	constructor() {
		super();
	}

	render() {
		return (
			<div className="container-fluid">
				<Routes>
					<Header />
				</Routes>
			</div>
		);
	}
}

App.propTypes = {
	// children: PropTypes.object.isRequired
};

export default App;