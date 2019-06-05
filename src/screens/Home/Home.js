import React, { Component } from 'react';
import { View, AsyncStorage, StyleSheet } from 'react-native';
import {connect} from 'react-redux';
import User from '../../components/User/User';
import SearchBar from '../../components/SearchBar/SearchBar';
import { fetchTeacherClasses } from '../../actions';
import ClassRoom from './../../components/ClassRoom/ClassRoom';

class HomeScreen extends Component {
  static navigationOptions = {
      title: 'Home',
  };

  state = { teste: ''}
  constructor(props) {
    super(props)
  }
  
  async componentDidMount() {
  //AsyncStorage.removeItem('token');
  const teste = await AsyncStorage.getItem('idProfessor');
  const nameProfessor = await AsyncStorage.getItem('name');
  //console.log('', nameProfessor)

    // const data = await getData();
    // this.props.setClasses(data);
    this.props.fetchTeacherClasses();
    //AsyncStorage.removeItem('token');
    //console.log(this.props.teacherClasses)
  }

  render() {
    
    return (
      <View>
        <User/>
        {/* <SearchBar/> */}
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

// const mapStateToProps = state => {
//   return {
//     teacherClasses: state.teacherClasses
//   };
// };

export default connect(null, { fetchTeacherClasses })(HomeScreen);