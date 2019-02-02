import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Generator = () => (
    <View style={styles.generate}>
        <Text> Add Number </Text>
    </View>
)

const styles = StyleSheet.create({
    generate: {
      padding: 10,
      backgroundColor: '#00bcd4',
      alignItems: 'center',
      
      width: '100%'
    }
  });

export default Generator