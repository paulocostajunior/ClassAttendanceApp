import React from 'react';
import { StyleSheet, Text, ScrollView, View, TouchableOpacity, FlatList} from "react-native";

const ListStudent = props => {
    console.log(props)
    return (
    //<TouchableOpacity onPress={props.onItemPressed}>
    <TouchableOpacity onPress={props.onItemPressed}>
        <View 
            style=  {[
                        styles.sectionStyle,
                        { flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-evenly',
                        },
                        props.absencias.exists ? styles.bgColorGreen : styles.bgColorRed
                    ]}
        >
            <Text>{props.item}</Text>
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
        bgColorRed: {
            backgroundColor: 'red'
        },
        bgColorGreen: {
            backgroundColor: 'green'
        }
});

export default ListStudent;