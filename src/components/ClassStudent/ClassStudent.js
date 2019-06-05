import React, { Component } from 'react';
import { StyleSheet, Text, ScrollView, View, TouchableOpacity, FlatList} from "react-native";
import ListStudent from '../ListStudent/ListStudent';
import { connect } from 'react-redux';

class ClassStudent extends Component {
    constructor(props) {
        super(props);
    }

    // setAttendance = (item) => {
    //     item.attendance == false ? item.attendance = true : item.attendance = false
        
    //     this.setState({
    //         studentObject: item,
    //     })
    // }

    render() {
        console.log('classStudent',this.props.item)
        return (
            <View>
                { this.props.item.alunos.map((item, index) => {
                     //console.log(item.nome)
                     return (
                        <ListStudent
                            key={item.codigo} 
                            item={item.nome}
                            absencias={this.props.item.absencias[index]}
                            // onItemPressed={() => this.classRoomHandler(this.props.item)}
                        />
                     )
                    
                })} 
            </View>
        )
    };
};

export default ClassStudent;

