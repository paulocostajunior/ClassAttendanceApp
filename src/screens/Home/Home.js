import React, { Component } from 'react';
import { Button, View, Text, TextInput, StyleSheet } from 'react-native';
import {connect} from 'react-redux';
import User from '../../components/User/User';
import SearchBar from '../../components/SearchBar/SearchBar';
import { getData } from './HomeService';

import ClassRoom from './../../components/ClassRoom/ClassRoom';

class HomeScreen extends Component {
  static navigationOptions = {
      title: 'Home',
  };

  constructor(props) {
    super(props)
  }
  
  async componentDidMount() {
    const data = await getData();
    this.props.setClasses(data);
  }

  render() {
    return (
      <View>
        <User/>
        <SearchBar/>
        <View>
          <ClassRoom 
            {...this.props}
          />
        </View>

      </View>

    );
  }
}

const styles = StyleSheet.create({
});

const mapStateToProps = state => {
  return {
    classes: state.classes
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setClasses: (classes) => dispatch({ type: 'SET_CLASSES', classes: classes }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);