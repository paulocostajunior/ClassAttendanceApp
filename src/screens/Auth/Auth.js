import React , { Component } from 'react';
import { View , Text, TextInput, StyleSheet, ImageBackground, AsyncStorage } from 'react-native';

import backgroundImage from '../../assets/classRoom.jpg';
import DefaultInput from '../../components/UI/DefaultInput/DefaultInput';
import SubmitButton from '../../components/UI/SubmitButton/SubmitButton';

import { connect } from 'react-redux';
import { PropTypes} from 'prop-types';

import * as UsersAPI from '../../shared/service/UsersAPI';

class Auth extends Component {
    state = {
        email: "",
        password: "",
        // token: ""
    }

    static navigationOptions = {
        title: 'Log In',
    };
    
    loginHandler = () => {
        UsersAPI.auth(this.state)
            .then(res => {
                console.log(res);
                AsyncStorage.setItem('token', res.token);
                AsyncStorage.setItem('idProfessor', res.idProfessor);
                AsyncStorage.setItem('name', res.name);
                
                this.props.navigation.navigate('Auth');
            });
      };

    onLoginChange = (e) => {
        const email = e;
        this.setState({ email });
    }

    onPassChange = (e) => {
        const password = e;
        this.setState({ password });
    }

    // async componentDidMount() {
    //     const token = await AsyncStorage.getItem('token');
    //     this.setState({ token });
    // }

    render(){
        return(
            <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
            <View style={styles.container}>
                <Text style={styles.loginTitle}>Student Attendance</Text>
                {/* <Text>{this.state.token}</Text> */}
                <View style={styles.inputContainer}>
                    <View style={styles.portraitPasswordContainer}>
                        <View style={styles.portraitPasswordWrapper}>
                            <DefaultInput 
                                placeholder="Login"
                                style={styles.input}
                                onChangeText={(e) => this.onLoginChange(e)}
                            />
                        </View>
                    </View>
                    <View style={styles.portraitPasswordWrapper}>
                        <View style={styles.portraitPasswordContainer}>
                            <DefaultInput 
                                style={styles.input}
                                placeholder="Password"
                                secureTextEntry
                                onChangeText={(e) => this.onPassChange(e)}
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

Auth.propTypes = {
    isAuthenticated: PropTypes.bool
}

/*const mapStateToProps = state => ({
    //isAuthenticated: state.auth.isAuthenticated
});

export default connect (mapStateToProps)(Auth);
*/
export default Auth;