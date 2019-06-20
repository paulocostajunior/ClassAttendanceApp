import React, { Component } from 'react';
import { StyleSheet, Text, ScrollView, View, TouchableOpacity, FlatList, AsyncStorage} from "react-native";
import ListSubject from '../ListSubject/ListSubject';
import { connect } from 'react-redux';
import { fetchTeacherClasses } from '../../actions';

class ClassRoom extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        
    }

    classRoomHandler = (item, indexMateria, indexTurma) => {
        this.props.navigation.navigate('AttendanceDate', {
            item: item
        });
        AsyncStorage.setItem('indexMateria',indexMateria);
        AsyncStorage.setItem('indexTurma',indexTurma);
        //console.log(AsyncStorage.getItem('indexMateria'))
    };
    
    render() {
        if (!this.props.teacherClasses) {
            return <View><Text>Loading</Text></View>
        }
        return (
            <View>
                {/* {console.log(this.props.teacherClasses.turmas)} */}
                { this.props.teacherClasses.turmas.map((item, index) => (
                        item.materias.map((item3, index3) => {
                            return (
                                <ListSubject 
                                    key={index3} 
                                    item={item3}
                                    turma={item.descricao}
                                    indexMateria={index3}
                                    indexTurma={index}
                                    onItemPressed={this.classRoomHandler}
                                /> 
                            )
                        })

                ))}
            </View>
        )
    };
};

const mapStateToProps = state => {
    return {
      teacherClasses: state.teacherClasses.teacherClasses
    };
  };
  
export default connect(mapStateToProps)(ClassRoom);

