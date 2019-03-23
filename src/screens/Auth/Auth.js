import React , { Component } from 'react';
import { View , Text, TextInput, StyleSheet, ImageBackground } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import backgroundImage from '../../assets/classRoom.jpg';
import DefaultInput from '../../components/UI/DefaultInput/DefaultInput';
import SubmitButton from '../../components/UI/SubmitButton/SubmitButton';


class Auth extends Component {
    static navigationOptions = {
        title: 'Log In',
    };
    
    loginHandler = () => {
        //alert('test')
        this.props.navigation.navigate('Home');
      };

    render(){
        return(
            <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
            <View style={styles.container}>
                <Text style={styles.loginTitle}>Student Attendance</Text>
                <View style={styles.inputContainer}>
                    <View style={styles.portraitPasswordContainer}>
                        <View style={styles.portraitPasswordWrapper}>
                            <DefaultInput 
                                placeholder="Login"
                                style={styles.input}
                            />
                        </View>
                    </View>
                    <View style={styles.portraitPasswordWrapper}>
                        <View style={styles.portraitPasswordContainer}>
                            <DefaultInput 
                                style={styles.input}
                                placeholder="Password"
                                secureTextEntry
                            />
                        </View>
                    </View>
                    <View>
                    <SubmitButton onPress={this.loginHandler}>Log In</SubmitButton>
                    </View>
                </View>
            </View>
            </ImageBackground>
        );
    };
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    backgroundImage: {
        width: "100%",
        flex: 1
    },
    loginTitle: {
        fontSize: 30,
        color: 'white',
        fontWeight: "bold",
        marginBottom: 30,
        textShadowColor: 'rgba(0, 0, 0, 1)',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 10
    },
    inputContainer: {
        width: "80%"
    },
    input: {
        backgroundColor: "#eee",
        borderColor: "#bbb"
    },
    portraitPasswordContainer: {
        flexDirection: "column",
        justifyContent: "flex-start"
    },
    portraitPasswordWrapper: {
        width: "100%"
    }
})

export default Auth;