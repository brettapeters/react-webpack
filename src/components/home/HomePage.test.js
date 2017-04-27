import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { Link } from 'react-router-dom';

import HomePage from './HomePage.jsx';

function setup() {
	const props = {};
	return shallow(<HomePage {...props} />);
}

describe('HomePage', function() {
	it('renders .jumbotron', function() {
		const wrapper = setup();
		expect(wrapper.find('div').hasClass('jumbotron')).to.be.true;
	});

	it('has a header and a paragraph', function() {
		const wrapper = setup();
		expect(wrapper.find('h1').length).to.equal(1);
		expect(wrapper.find('p').length).to.equal(1);
	});

	it('has a link to "about"', function() {
		const wrapper = setup();
		expect(wrapper.find(Link).props().to).to.equal('about');
	});
});

