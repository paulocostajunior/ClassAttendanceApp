import React from 'react';
import { View, Text } from 'react-native';
import SubjectHeader from '../../components/SubjectHeader/SubjectHeader';
import ClassDate from '../../components/ClassDate/ClassDate';

class AttendanceDate extends React.Component {  
    static navigationOptions = {
        title: 'Attendance Date',
    };
  
    constructor(props) {
      super(props)
    }

    render() {
        const item = this.props.navigation.getParam('item');
        //console.log('attendanceDate',item.turmas[0].materias[0].nome)
        return (
            <View>
                <SubjectHeader item={item.turmas[0].materias[0].nome} />
                <ClassDate {...this.props} item={item}/>
            </View>
        );
    };
};

export default AttendanceDate;