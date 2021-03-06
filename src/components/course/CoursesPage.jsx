import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as courseActions from '../../actions/course-actions';
import CourseList from './CourseList.jsx';


export class CoursesPage extends React.Component {
	constructor(props, context) {
		super(props, context);
	}

	courseRow(course, index) {
		return <div key={index}>{course.title}</div>;
	}

	render() {
		const { courses } = this.props;

		return (
			<div>
				<h1>Courses</h1>
				<CourseList courses={courses} />
			</div>
		);
	}
}

CoursesPage.propTypes = {
	actions: PropTypes.object.isRequired,
	courses: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
	return {
		courses: state.courses
	};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(courseActions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
