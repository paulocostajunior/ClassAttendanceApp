import { combineReducers } from 'redux';
import teacherClassesReducer from './teacherClassesReducer';
import { authReducer } from './teacherClassesReducer';

export default combineReducers ({
    teacherClasses: teacherClassesReducer
    // authReducer: authReducer
});