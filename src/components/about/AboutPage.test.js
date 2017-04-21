import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import AboutPage from './AboutPage.jsx';

function setup() {
	const props = {};
	return shallow(<AboutPage {...props} />);
}

describe('AboutPage', function() {
	it('renders an h1 and a paragraph', function() {
		const wrapper = setup();
		expect(wrapper.find('h1').text()).to.equal('About');
	});
});