import React, { Component } from 'react';
import { StyleSheet, Text, Button, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


class SubjectHeader extends Component {
    render() {
        console.log('header',this.props.item)
        return (
                <View style={styles.container}>
                    <Text style={styles.userText}>{this.props.item}</Text>
                    {/* <Text style={styles.userText}>{this.props.item.turma}</Text> */}
                </View>
        );
    };
};

const styles = StyleSheet.create({
    container: {
        // flexDirection: 'row',        
        borderBottomWidth: 1,
        height: 50,
        borderBottomColor: 'black',
        alignItems: 'center',
        justifyContent: 'center'
    },
    userText: {
        fontSize: 16
    },
    userImage: {
        paddingRight: 20
    }
});


export default SubjectHeader;

