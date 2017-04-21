import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import App from './App.jsx';

function setup() {
	const props = {};
	return shallow(<App {...props} />);
}

describe('App', function() {
	it('renders .container-fluid', function() {
		const wrapper = setup();
		expect(wrapper.find('div').hasClass('container-fluid')).to.be.true;
	});
});