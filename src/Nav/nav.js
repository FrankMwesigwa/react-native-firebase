import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Nav = (props) => (
    <View style={styles.nav}>
        <Text>{props.name}</Text>
    </View>
)

const styles = StyleSheet.create({
    nav: {
      flex: 1,
      backgroundColor: '#eaeaea',
      alignItems: 'center',
      padding: 10,
      width: '100%',
      borderBottomWidth:2,
      borderBottomColor:'#dddddd'
    }
  });

export default Nav