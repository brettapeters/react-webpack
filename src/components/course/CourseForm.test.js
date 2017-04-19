import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import CourseForm from './CourseForm.jsx';

function setup(saving) {
	const props = {
		course: {}, saving, errors: {},
		onSave: () => {},
		onChange: () => {}
	};

	return shallow(<CourseForm {...props} />);
}

describe('CourseForm', function() {
	it('renders form and h1', function() {
		const wrapper = setup(false);
		expect(wrapper.find('form')).to.have.length(1);
		expect(wrapper.find('h1').text()).to.equal('Manage Course');
	});

	it('save button is labeled "Save" when not saving', function() {
		const wrapper = setup(false);
		expect(wrapper.find('input').props().value).to.equal('Save');
	});

	it('save button is labeled "Saving..." when saving', function() {
		const wrapper = setup(true);
		expect(wrapper.find('input').props().value).to.equal('Saving...');
	});
});
