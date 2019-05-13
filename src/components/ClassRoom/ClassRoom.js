import React, { Component } from 'react';
import { StyleSheet, Text, ScrollView, View, TouchableOpacity, FlatList} from "react-native";
import ListSubject from '../ListSubject/ListSubject';
import { connect } from 'react-redux';
import { fetchTeacherClasses } from '../../actions';

class ClassRoom extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        
    }

    classRoomHandler = (item) => {
        this.props.navigation.navigate('AttendanceDate', {
            item: item
        });
    };
    //this.props.classes.data
    render() {
        //console.log('classRoom',this.props.teacherClasses._id);
        return (
            <View>
                 { this.props.teacherClasses.map((item) => {
                    return (
                        // console.log(item)
                        <ListSubject 
                            key={item._id} 
                            item={item}
                            onItemPressed={() => this.classRoomHandler(item)}
                        /> 
                    )
                })}
            </View>
        )
    };
};

const mapStateToProps = state => {
    return {
      teacherClasses: Object.values(state.teacherClasses)
    };
  };
  
export default connect(mapStateToProps)(ClassRoom);

