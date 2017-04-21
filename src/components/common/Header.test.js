import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import { NavLink } from 'react-router-dom';
import Header from './Header.jsx';

function setup() {
	const props = {};
	return shallow(<Header {...props} />);
}

describe('Header', function() {
	it('renders nav with 3 links', function() {
		const wrapper = setup();
		expect(wrapper.find('nav').length).to.equal(1);
		expect(wrapper.find(NavLink).length).to.equal(3);
	});
});