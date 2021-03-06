import * as types from './action-types';
import courseApi from '../api/mock-course-api';

export function loadCoursesSuccess(courses) {
	return { type: types.LOAD_COURSES_SUCCESS, courses };
}

export function loadCourses() {
	return function(dispatch) {
		return courseApi.getAllCourses()
			.then(courses => {
				dispatch(loadCoursesSuccess(courses));
			})
			.catch(error => {
				throw(error);
			});
	};
}