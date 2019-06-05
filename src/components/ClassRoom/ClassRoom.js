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
    
    render() {
        console.log('classRoom',this.props.teacherClasses);
        return (
            <View>
                { this.props.teacherClasses.map((item) => (
                    item.map((item2) => (
                        item2.materias.map((item3) => {
                            return (
                                <ListSubject 
                                    key={item._id} 
                                    item={item3}
                                    onItemPressed={this.classRoomHandler}
                                /> 
                            )

                        })
                    ))
                ))}
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

