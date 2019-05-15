import {
    SIGN_IN,
    SIGN_OUT,
    FETCH_STUDENTS,
    FETCH_TEACHER_CLASSES,
    UPDATE_STUDENT_ATTENDANCE
} from './types';
import axios from 'axios';


import teacherClasses from '../apis/teacherData';

export const fetchTeacherClasses = () => async dispatch => {
    const idProfessor = await AsyncStorage.getItem('idProfessor');

    const response = await axios.get(`http://localhost:5000/api/teacher-classes/${idProfessor}`);
    console.log(response)
    dispatch({ type: FETCH_TEACHER_CLASSES, payload: response.data });
}