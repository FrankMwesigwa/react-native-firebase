import React from 'react'
import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native'

const Generator = (props) => (
    <TouchableWithoutFeedback onPress={ () => {props.add()} }>
        <View style={styles.generate}>
            <Text> Add Number </Text>
        </View>
    </TouchableWithoutFeedback >
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