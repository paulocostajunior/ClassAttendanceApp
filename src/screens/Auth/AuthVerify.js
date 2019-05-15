import React from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  View,
} from 'react-native';

class AuthVerify extends React.Component {
  constructor(props) {
    super(props);
    this._bootstrapAsync();
  }

  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = async () => {
    const token = await AsyncStorage.getItem('token');
        
    if(token) {
        this.props.navigation.navigate('RootStack');
    } else {
      this.props.navigation.navigate('Login');
    }
  }

  // Render any loading content that you like here
  render() {
    return (
      <View>
        <ActivityIndicator />
      </View>
    );
  }
}

export default AuthVerify;
