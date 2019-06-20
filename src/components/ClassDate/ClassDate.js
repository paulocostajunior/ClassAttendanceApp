import React, { Component } from 'react';
import { StyleSheet, Text, ScrollView, View, TouchableOpacity, FlatList, AsyncStorage} from "react-native";
import ListDate from '../ListDate/ListDate';

class ClassDate extends Component {
    constructor(props) {
        super(props);
    }
    
    classRoomHandler = (item, index) => {  
        this.props.navigation.navigate('AttendanceClass', {
            item: item,
            clickedDate: this.props.item.datas[index]
        });
        AsyncStorage.setItem('indexData', index);
    };

    // async componentDidMount() {
    //     const indexMateria = await AsyncStorage.getItem('indexMateria');
    //     console.log('indexMateria', indexMateria);
    // }

    render() {
        
        return (
            <View>
                { this.props.item.datas.map((item, index) => {
                    // console.log(item)
                     return (
                        <ListDate
                            key={index} 
                            item={item}
                            onItemPressed={() => this.classRoomHandler(this.props.item, index)}
                        />
                     )

                })}
            </View>
        )
    };
};

export default ClassDate;

