import React from 'react';
import PropTypes from 'prop-types';

const CourseForm = props => {
	const { saving } = props;
	return (
		<form>
			<h1>Manage Course</h1>
			<input
				value={saving ? 'Saving...' : 'Save'}
			/>
		</form>
	);
};

CourseForm.propTypes = {
	saving: PropTypes.bool
};

export default CourseForm;