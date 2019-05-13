import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { applyMiddleware, compose, createStore, combineReducers } from 'redux';
//import classesReducer from './src/store/reducers/classes';
//import teacherClasses from './src/reducers/teacherClassesReducer';
import reducers from './src/reducers';
import { Tabs } from './src/shared/router/navigation';
import reduxThunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(reduxThunk))
    );

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={{ flex: 1 }}>
          <Tabs />
        </View>
      </Provider>
    );
  }
}