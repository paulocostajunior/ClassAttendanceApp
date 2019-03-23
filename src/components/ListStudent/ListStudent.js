import React from 'react';
import { StyleSheet, Text, ScrollView, View, TouchableOpacity, FlatList} from "react-native";

const ListStudent = props => (
    
    // <TouchableOpacity onPress={props.onItemPressed}>
    <TouchableOpacity onPress={props.onItemPressed}>
    {console.log(props.studentObject.name)}
    {/* {console.log(props.studentObject.attendance)} */}
    {/* {console.log(props)} */}
    {/* {console.log(props.studentObject.attendance)} */}
        <View 
            style=  {[
                        styles.sectionStyle,
                        { flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-evenly',
                        },

                        props.item.attendance === false ? styles.bgColorRed : null,
                        props.item.attendance === true ? styles.bgColorGreen : null,
                        
                        props.item.name == props.studentObject.name && 
                        props.item.attendance == false 
                        ? styles.bgColorRed : null,

                        props.item.name == props.studentObject.name && 
                        props.item.attendance == true
                        ? styles.bgColorGreen : null
                    ]}
        >
            <Text>{props.item.name}</Text>
        </View>
    </TouchableOpacity>
);

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