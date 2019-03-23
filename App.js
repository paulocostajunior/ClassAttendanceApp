import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import classesReducer from './src/store/reducers/classes';
import { Tabs } from './src/shared/router/navigation';

const reducers = combineReducers({
  classes: classesReducer,
});

const store = createStore(reducers);

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