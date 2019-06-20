import React from 'react';
import { StyleSheet, View, Text, AsyncStorage } from 'react-native';
import SubjectHeader from '../../components/SubjectHeader/SubjectHeader';
import ClassStudent from '../../components/ClassStudent/ClassStudent';
import axios from 'axios';

class AttendanceClass extends React.Component {  
    static navigationOptions = {
        title: 'Attendance Class',
    };

    state = {
        teacherClassComplete: {}
    }

    componentDidMount() {
        this.fetchTeacherClassesComplete();
    }
    
    fetchTeacherClassesComplete = async () =>  {
        const idProfessor = await AsyncStorage.getItem('idProfessor');
    
        const response = await axios.get(`http://localhost:5000/api/teacher-classes/${idProfessor}`);
        this.setState({teacherClassComplete: response.data})
    }

    render() {
        const item = this.props.navigation.getParam('item');
        const clickedDate = this.props.navigation.getParam('clickedDate');
        
        console.log(this.state.teacherClassComplete)
        console.log(item)
        console.log(clickedDate)
        return (
            <View>
                <View style={styles.container}>
                    <Text style={styles.subjectText}>Matéria: {item.nome}</Text>
                </View>
                <SubjectHeader item={clickedDate} />
                <ClassStudent item={item} clickedDate={clickedDate}/>
            </View>
        );
    };
};

const styles = StyleSheet.create({
    container: {
        // flexDirection: 'row',        
        borderBottomWidth: 1,
        height: 50,
        borderBottomColor: 'black',
        alignItems: 'center',
        justifyContent: 'center'
    },
    subjectText: {
        fontSize: 16,
        paddingRight: 20
    }
});
export default AttendanceClass;