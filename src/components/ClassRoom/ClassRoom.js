import React, { Component } from 'react';
import { StyleSheet, Text, ScrollView, View, TouchableOpacity, FlatList} from "react-native";
import ListSubject from '../ListSubject/ListSubject';
import { connect } from 'react-redux';

class ClassRoom extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        data: [
            {
                materia: 'Biology',
                turma: '1A',
                dates:  [
                            { month: 'Januaray', day: '12', year: '2019'},
                            { month: 'Januaray', day: '14', year: '2019'},
                            { month: 'Januaray', day: '16', year: '2019'},
                        
                        ],
                students: [{ name: 'Paulo', attendance: false}, {name:'Joao', attendance: false}, {name: 'Lara', attendance: false}]
            },
            {
                materia: 'English',
                turma: '2B',
                dates:  [
                            { month: 'Januaray', day: '12', year: '2019'},
                            { month: 'Januaray', day: '14', year: '2019'},
                            { month: 'Januaray', day: '16', year: '2019'},
                
                        ],
                students: [
                            { name: 'Paulo', attendance: false},
                            {name:'Mari', attendance: false},
                            {name: 'Lara', attendance: false}
                        ]
            }
        ],
    }

    classRoomHandler = (item) => {
        this.props.navigation.navigate('AttendanceDate', {
            item: item
        });
    };
    //this.props.classes.data
    render() {
        return (
            <View>
                { this.state.data.map((item, index) => (
                    <ListSubject 
                        key={index} 
                        item={item}
                        onItemPressed={() => this.classRoomHandler(item)}
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

export default connect(mapStateToProps)(ClassRoom);

