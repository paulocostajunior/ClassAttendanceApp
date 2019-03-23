import React, { Component } from 'react';
import { StyleSheet, Text, ScrollView, View, TouchableOpacity, FlatList} from "react-native";
import ListDate from '../ListDate/ListDate';
import { connect } from 'react-redux';

class ClassDate extends Component {
    constructor(props) {
        super(props);
    }

    setAttendance = (item, date) => {
        // console.log(item);
        // console.log(date);
        this.props.navigation.navigate('AttendanceClass', {
            item: item
        });

    }
    
    // classRoomHandler = (item) => {
        
    //     this.props.navigation.navigate('AttendanceDate', {
    //         item: item
    //     });
    // };
    render() {
        console.log(this.props)
        return (
            <View >
                {this.props.item.dates.map((item, index) => (
                    <ListDate
                        key={index}
                        item={item}
                        onItemPressed ={() => this.setAttendance(this.props.item, item.dates)}
                        //studentObject={this.state.studentObject}
                        //pass color here
                    />
                ))}
            </View>
        )
    };
};

const mapStateToProps = state => {
    return {
        classes: state.classes
    };
};

export default connect(mapStateToProps)(ClassDate);

