import React, { Component } from 'react';
import { StyleSheet, Text, Button, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


class User extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Icon style={styles.userImage} size={25} name={'md-person'}  />
                <Text style={styles.userText}>Paulo César Costa Júnior
                </Text>
            </View>
        );
    };
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',        
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


export default User;

