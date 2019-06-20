import {  
    FETCH_TEACHER_CLASSES,
    FETCH_COMPLETE_TEACHER_CLASSES
} from '../actions/types';
import _ from 'lodash';

export default (state = {}, action) => {
    switch (action.type) {
        case FETCH_TEACHER_CLASSES:
            return { ...state, teacherClasses: action.payload };
        // case FETCH_STREAM:
        //    return {...state, [action.payload.id]: action.payload};
        // case CREATE_STREAM:
        //     return {...state, [action.payload.id]: action.payload};
        // case EDIT_STREAM:
        //     return {...state, [action.payload.id]: action.payload};
        // case DELETE_STREAM:
        //     return _.omit(state, action.payload);
        default:
            return state;
    }
}