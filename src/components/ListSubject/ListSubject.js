import React from 'react';
import { StyleSheet, Text, ScrollView, View, TouchableOpacity, FlatList} from "react-native";

const ListSubject = props => {
    // <TouchableOpacity onPress={props.onItemPressed}>
    console.log(props);
    return (
        <TouchableOpacity onPress={() => props.onItemPressed(props.item, props.indexMateria, props.indexTurma)}>
            <View style={[styles.sectionStyle, { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly' }]}>
                <Text>{props.item.nome} - Turma: {props.turma}</Text>
            </View>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    listContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
        sectionStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#DACE9A',
        borderWidth: .5,
        height: 40,
        borderRadius: 5 ,
        margin: 10
    },
});

export default ListSubject;