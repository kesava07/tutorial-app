import React, { Component } from 'react'
import { Text, View, StyleSheet, StatusBar, Image, Dimensions, TouchableOpacity } from 'react-native'
import { Actions } from 'react-native-router-flux'


const WIDTH = Dimensions.get('window').width;
export class Home extends Component {
    render() {

        return (
            <View style={styles.container}>
                <StatusBar backgroundColor="#3367d6" />
                <View style={[styles.welcomeCard, styles.shadow]}>
                    <Image source={require('../Images/man.png')} style={styles.imageStyles} />
                    <Text style={{ fontSize: 20 }}>Welcome to Tutorials point</Text>
                </View>
                <View style={styles.cards}>
                    <TouchableOpacity style={[styles.shadow, styles.cardBody]} onPress={() => Actions.maths()}>
                        <Image source={require('../Images/maths.png')} style={styles.imageStyles} />
                        <Text style={{ fontSize: 20 }}>Maths</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.shadow, styles.cardBody]} onPress={() => Actions.physics()} >
                        <Image source={require('../Images/atom.png')} style={styles.imageStyles} />
                        <Text style={{ fontSize: 20 }}>Physics</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
};

export default Home;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: "#f8f9fa"
    },
    welcomeCard: {
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: 'center',
        width: WIDTH - 30,
        marginTop: 20,
        marginBottom: 30,
        padding: 15,
        borderRadius: 5,
    },
    cards: {
        width: WIDTH,
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    shadow: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.5,
        shadowRadius: 1,
        elevation: 5
    },
    cardBody: {
        backgroundColor: "white",
        width: 150,
        padding: 15,
        borderRadius: 5,
        alignItems: "center"
    },
    imageStyles: {
        height: 60,
        width: 60,
        marginBottom: 10
    }
})

