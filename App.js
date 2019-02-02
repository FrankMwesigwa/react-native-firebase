
import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Nav from './src/Nav/nav';
import Generator from './src/Gen/generator';

class App extends Component{

  state = {
    appname : "My awesome Killer App !!"
  }

  render(){
    return(
      <View style={styles.container}>
          <Nav name={this.state.appname} />
          <Generator />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 20
  }
});

export default App