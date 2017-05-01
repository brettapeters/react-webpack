import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import courses from './course-reducer';

const rootReducer = combineReducers({
	courses,
	router: routerReducer
});

export default rootReducer;