import React, { Component } from 'react';
import { StyleSheet, Text, ScrollView, View, TouchableOpacity, FlatList} from "react-native";
import ListStudent from '../ListStudent/ListStudent';
import { connect } from 'react-redux';

class ClassStudent extends Component {
    constructor(props) {
        super(props);
    }
    
    state = {
        studentObject: ''
    }

    setAttendance = (item) => {
        item.attendance == false ? item.attendance = true : item.attendance = false
        
        this.setState({
            studentObject: item,
        })
    }

    render() {
        //console.log(this.props.item.materia);
        //console.log(this.state.data);
        return (
            //if the object state was here...
            // <View>
            //     { 
            //         this.state.data.map((item, index) => (
            //             item.students.map((c, i) => ( 
            //             (
            //                 <ListStudent 
            //                     key={i} 
            //                     item={c}
            //                 />
            //             )
            //         ))
            //     ))}
            // </View>
            <View >
                {this.props.item.students.map((item, index) => (
                    <ListStudent 
                        key={index}
                        item={item}
                        onItemPressed ={() => this.setAttendance(item)}
                        studentObject={this.state.studentObject}
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

export default connect(mapStateToProps)(ClassStudent);

