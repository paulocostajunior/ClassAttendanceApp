import React from 'react';
import { View, Text } from 'react-native';
import SubjectHeader from '../../components/SubjectHeader/SubjectHeader';
import ClassStudent from '../../components/ClassStudent/ClassStudent';

class AttendanceClass extends React.Component {  
    static navigationOptions = {
        title: 'Attendance Class',
    };

    render() {
        const item = this.props.navigation.getParam('item');
        //console.log(item.students)
        return (
            <View>
                <SubjectHeader item={item} />
                <ClassStudent item={item}/>
            </View>
        );
    };
};

export default AttendanceClass;