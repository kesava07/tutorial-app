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
                    <Text style={{ fontSize: 20 }}>Welcome to Bindu Tutorials</Text>
                </View>
                <View style={[styles.cards, { flexWrap: 'wrap' }]}>
                    <TouchableOpacity style={[styles.shadow, styles.cardBody]} onPress={() => Actions.books()}>
                        <Image source={require('../Images/notebook.png')} style={styles.imageStyles} />
                        <Text style={{ fontSize: 20 }}>Books</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.shadow, styles.cardBody]} onPress={() => Actions.exercises()} >
                        <Image source={require('../Images/test.png')} style={styles.imageStyles} />
                        <Text style={{ fontSize: 20 }}>Exercises</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.shadow, styles.cardBody]} onPress={() => Actions.questions()}>
                        <Image source={require('../Images/question2.png')} style={styles.imageStyles} />
                        <Text style={{ fontSize: 20 }}>Questions </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.shadow, styles.cardBody]} onPress={() => Actions.chapters()} >
                        <Image source={require('../Images/chapters.png')} style={styles.imageStyles} />
                        <Text style={{ fontSize: 20 }}>Chapters</Text>
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
        justifyContent: 'space-evenly',
        marginBottom: 20
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
        alignItems: "center",
        marginBottom: 20
    },
    imageStyles: {
        height: 60,
        width: 60,
        marginBottom: 10
    }
})

