
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { StackNavigator } from 'react-navigation';

import Home from './src/screens/home';
import AddItem from './src/screens/addItem';
import ListItem from './src/screens/listItem';

export default class App extends Component {
  render() {
    return (
      <AppNavigator />
    );
  }
}

const AppNavigator = StackNavigator({
  HomeScreen: { screen: Home },
  AddItemScreen: { screen: AddItem },
  ListItemScreen: { screen: ListItem }
});
