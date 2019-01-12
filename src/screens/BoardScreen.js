import React, { Component } from 'react';
import { StyleSheet, ScrollView, ActivityIndicator, View, Text } from 'react-native';
import { List, ListItem, Button, Icon } from 'react-native-elements';

import firebase from '../config/Firebase';

class BoardScreen extends Component {

    
    
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Board List</Text>
          <Button
            title="Go to Details"
            onPress={() => this.props.navigation.navigate('BoardDetails')}
          />
          <Button
            title="Go to Add Board"
            onPress={() => this.props.navigation.navigate('AddBoard')}
          />
          <Button
            title="Go to Edit Board"
            onPress={() => this.props.navigation.navigate('EditBoard')}
          />
        </View>
      );
    }
  }
  
  export default BoardScreen;