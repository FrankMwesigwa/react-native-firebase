import React, { Component } from 'react'
import { StyleSheet, Text, View , TextInput, Button, Picker, Slider } from 'react-native'

class Language extends Component{

    state = {
        language:'',
        number:20
    }

    handleSliderChange = (value) => {
        this.setState({number:parseInt(value)})
    }

    render(){
        return(
            <View style={{width:'100%'}}>
            <Picker style={{width:'100%'}}
                selectedValue={this.state.language}
                onValueChange={(itemValue, itemIndex)=>{
                    this.setState({language:itemValue})
                }}
            >
                <Picker.Item label="English" value="english"/>
                <Picker.Item label="German" value="german"/>
                <Picker.Item label="French" value="french"/>
            </Picker>

            <Slider
                value={this.state.number}
                maximumValue={100}
                minimumValue={20}
                onValueChange={this.handleSliderChange}
            
            />
            
            </View>
            
        )
    }
}

export default Language