
import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Nav from './src/Nav/nav';
import Input from './src/Nav/input';
import Generator from './src/Gen/generator';
import ListItem from './src/Gen/listItem';

class App extends Component{

  state = {
    appname : "My awesome Killer App !!",
    random : [20, 13]
  }

  onAddRandom = () => {
    const random = Math.floor(Math.random()* 100) +1
    this.setState(prevState => {
      return{
        random:[...prevState.random,random]
      }
    })
  }

  onItemDelete = (i) => {
    alert('Deleted')
    /*cosnt item = this.state.random.filter((item,index) => {
      return i !== index;
    });
    this.setState({random: item})*/
  }

  render(){
    return(
      <View style={styles.container}>
          <Nav name={this.state.appname} />
          <Generator add={this.onAddRandom} />
          <ListItem items={this.state.random} delete={this.onItemDelete}/>
          <Input />
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