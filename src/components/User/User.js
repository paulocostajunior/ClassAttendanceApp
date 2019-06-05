import React, { Component } from 'react';
import { StyleSheet, Text, Button, View, AsyncStorage} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


class User extends Component {
    state = {
        name: ''
    }
    async componentDidMount() {
        const nameProfessor = await AsyncStorage.getItem('name');
        this.setState({name: nameProfessor})
    }

    render() {

        return (
            <View style={styles.container}>
                <Icon style={styles.userImage} size={25} name={'md-person'}  />
                <Text style={styles.userText}>{this.state.name}
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

