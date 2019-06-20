import React, { Component } from 'react';
import { StyleSheet, Text, ScrollView, View, TouchableOpacity, FlatList, AsyncStorage} from "react-native";
import ListStudent from '../ListStudent/ListStudent';
import { connect } from 'react-redux';

class ClassStudent extends Component {
    constructor(props) {
        super(props);
    }

    setAttendance = async (index) => {
        //console.log(this.props.item.absencias[index])
        AsyncStorage.setItem('indexStudent', index);
        const indexTurma = await AsyncStorage.getItem('indexTurma');
        const indexMateria = await AsyncStorage.getItem('indexMateria');
        const indexData = await AsyncStorage.getItem('indexData');
        const indexStudent = await AsyncStorage.getItem('indexStudent');
        const idProfessor = await AsyncStorage.getItem('idProfessor');
        console.log(idProfessor, indexMateria, indexData, indexStudent)

        let body = {
            idProfessor: idProfessor,
            indexTurma: indexTurma,
            indexMateria: indexMateria,
            indexStudent: indexStudent
        }
        
        fetch(`http://localhost:5000/api/teacher-classes/`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })
        .then(res => res.json())
       
        .catch((error) => { console.error(error); })

        
        
        if (this.props.item.absencias[index].exists) {
            this.props.item.absencias[index].exists = false;
        } else {
            this.props.item.absencias[index].exists = true;
        }
        this.forceUpdate();
    }

    // async componentDidMount() {
    //     const indexData = await AsyncStorage.getItem('indexData');
    //     console.log('indexdata', indexData);
    // }

    render() {
        //console.log(this.props.teacherClasses)
        //console.log('classStudent',this.props.item)
        return (
            <View>
                { this.props.item.absencias.map((item, index) => {
                    // console.log(this.props.item.absencias[index])
                    // console.log(this.props.clickedDate)
                    if (this.props.item.absencias[index].data === this.props.clickedDate.toString()) {
                    return (
                        <ListStudent
                            key={index}
                            item={item.nome}
                            absencias={this.props.item.absencias[index]}
                            onItemPressed={() => this.setAttendance(index)}
                        />
                        )
                    }
                })} 
            </View>
        )
    };
};

export default ClassStudent;