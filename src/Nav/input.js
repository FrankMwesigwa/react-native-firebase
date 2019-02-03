import React, { Component } from 'react'
import { StyleSheet, Text, View , TextInput, Button } from 'react-native'

class Input extends Component{
    
    state = {
        firstName : '',
        users: ['John', 'James', 'Emma','Francis', 'Steve','Martha']
    }

    onChangeInput = (value) => {
        this.setState({firstName:value})
    }

    onAddUser = () => {
        this.setState(prevState =>{
            return {
                firstName: '',
                users:[...prevState.users,prevState.firstName]
            }
        })

    }

    render(){
        return(
            <View style={styles.inputWrapper}>
                <TextInput 
                    value = {this.state.firstName}
                    style= {styles.input}
                    onChangeText = {this.onChangeInput}
                />
                <Button
                    title='Add User'
                    onPress={this.onAddUser}
                />
                {
                    this.state.users.map(item =>(
                        <Text style={styles.users} key={item}>{item}</Text>
                    ))
                }
            </View>
            
        )
    }
}

const styles = StyleSheet.create({
    nav: {
      backgroundColor: '#00bcd4',
      width: '100%'
    },
    inputWrapper: {
        width: '100%'
    },
    users:{
        fontSize: 40,
        borderWidth:1,
        borderColor:'#cecece',
        padding:10,
        marginBottom:20
    }
  });

export default Input