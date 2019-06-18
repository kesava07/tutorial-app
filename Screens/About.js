import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Actions } from 'react-native-router-flux'

export class About extends Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <Text style={{color:"black" , fontSize:25 , fontWeight:"bold"}}  onPress={() => Actions.profile()}> About </Text>
            </View>
        )
    }
}

export default About
