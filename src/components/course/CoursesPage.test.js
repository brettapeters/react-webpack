import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import { CoursesPage } from './CoursesPage.jsx';

function setup() {
	const props = {
		courses: []
	};
	return shallow(<CoursesPage {...props} />);
}

describe('CoursesPage', function() {
	it('renders an h1', function() {
		const wrapper = setup();
		expect(wrapper.find('h1').text()).to.equal('Courses');
	});
});
