import React , { Component } from 'react';
import { View , Text, TextInput, StyleSheet, ImageBackground } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import backgroundImage from '../../assets/classRoom.jpg';
import DefaultInput from '../../components/UI/DefaultInput/DefaultInput';
import SubmitButton from '../../components/UI/SubmitButton/SubmitButton';

import { connect } from 'react-redux';
import { PropTypes} from 'prop-types';
import { login } from '../../actions/auth';

// const Login = ({ login, isAuthenticated }) => {
//     const [formData, setFormData] = useState({
//         email: '',
//         password: ''
//     });

//     const {email, password} = formData;

//     const onChange = e => 
//     setFormData({ ...formData, [e.target.name]: e.target.value });

//     const onSubmit = async e => {
//         e.preventDefault();
//         console.log('SUCCESS')
//     }
// }

if (isAuthenticated) {
    this.props.navigation.navigate('Home');
}

class Auth extends Component {
    state = {
        login: "",
        password: "",
    }

    static navigationOptions = {
        title: 'Log In',
    };
    
    loginHandler = () => {
        //alert('test')
        //this.props.navigation.navigate('Home');
        console.log('state', state);
      };

    onLoginChange = (e) => {
        const login = e.target.value;
        this.setState({ login });
    }

    onPassChange = (e) => {
        const password = e.target.value;
        this.setState({ password });
    }

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
                    <SubmitButton onPress={this.loginHandler()}>Log In</SubmitButton>
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

login.propTypes = {
    login: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect (mapStateToProps, { login })(Auth);