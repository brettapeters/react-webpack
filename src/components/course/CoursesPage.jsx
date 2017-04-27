import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as courseActions from '../../actions/course-actions';

class CoursesPage extends React.Component {
	constructor() {
		super();
		this.state = {
			course: { title: "" }
		};

		this.onTitleChange = this.onTitleChange.bind(this);
		this.onClickSave = this.onClickSave.bind(this);
	}

	onTitleChange(event) {
		const course = this.state.course;
		course.title = event.target.value;
		this.setState(() => ({ course }));
	}

	onClickSave() {
		alert(`Saving ${this.state.course.title}`);
	}

	render() {
		return (
			<div>
				<h1>Courses</h1>
				<h2>Add Course</h2>
				<input
					type="text"
					onChange={this.onTitleChange}
					value={this.state.course.title}
				/>
				<input
					type="submit"
					value="Save"
					onClick={this.onClickSave}
				/>
			</div>
		);
	}
}

function mapStateToProps(state, ownProps) {
	return {
		courses: state.courses
	};
}

export default connect(mapStateToProps)(CoursesPage);
