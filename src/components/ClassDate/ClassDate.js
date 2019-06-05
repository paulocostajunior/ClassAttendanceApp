import React, { Component } from 'react';
import { StyleSheet, Text, ScrollView, View, TouchableOpacity, FlatList} from "react-native";
import ListDate from '../ListDate/ListDate';

class ClassDate extends Component {
    constructor(props) {
        super(props);
    }
    
    classRoomHandler = (item) => {  
        this.props.navigation.navigate('AttendanceClass', {
            item: item
        });
    };

    render() {
        console.log('classDAte',this.props.item)
        return (
            <View>
                { this.props.item.datas.map((item, index) => {
                    // console.log(item)
                     return (
                        <ListDate
                            key={index} 
                            item={item}
                            onItemPressed={() => this.classRoomHandler(this.props.item)}
                        />
                     )

                })}
            </View>
        )
    };
};

export default ClassDate;

