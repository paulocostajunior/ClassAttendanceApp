import React, { Component } from 'react';
import { StyleSheet, Text, Button, View, AsyncStorage, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


class User extends Component {
    state = {
        name: ''
    }

    constructor(props) {
        super(props)
      }
      
    async componentDidMount() {
        const nameProfessor = await AsyncStorage.getItem('name');
        this.setState({name: nameProfessor})
    }

    logoutHandler = () => {
        AsyncStorage.removeItem('token');
        this.props.navigation.navigate('Auth')
    }

    render() {

        return (
            <View style={styles.container}>
                <Icon style={styles.userImage} size={25} name={'md-person'}  />
                <Text style={styles.userText}>{this.state.name}</Text>
                <TouchableOpacity onPress={this.logoutHandler}><View><Text style={styles.logout}>(Logout)</Text></View></TouchableOpacity>
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
        alignItems: 'center'
    },
    userText: {
        fontSize: 16,
        paddingRight: 50
    },
    userImage: {
        paddingLeft: 100,
        paddingRight: 20
    }
});


export default User;

