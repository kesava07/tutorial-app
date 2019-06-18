import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Actions } from 'react-native-router-flux'

export class Profile extends Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <Text style={{ color: "black", fontSize: 25, fontWeight: "bold" }} onPress={() => Actions.home()}> Profile </Text>
            </View>
        )
    }
};

export default Profile
