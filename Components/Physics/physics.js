import React, { Component } from 'react'
import { Text, View, StyleSheet, ScrollView } from 'react-native'
import TopicsList from '../TopicsList/TopicsList';


export class physics extends Component {
    state = {
        topics: [
            "Fundamental Concepts",
            "Mechanics",
            "Kinematics: Objects in Motion",
            "Fluid Mechanics",
            "Thermodynamics",
            "Electricity and Magnetism",
            "Oscillations and Waves",
            "Atomic, Nuclear, and Particle Physics"
        ]
    }
    render() {
        const { topics } = this.state;
        return (
            <View style={styles.constainer}>
                <View style={{ width: "100%" }}>
                    <Text style={[styles.heading, { position: 'relative', left: "35%" }]}>Topics on Physics</Text>
                </View>
                <ScrollView style={{ width: "100%" }}>

                    {topics && topics.map((val, i) => <TopicsList key={i} topics={val} />)}

                </ScrollView>
            </View>
        )
    }
}

export default physics;


const styles = StyleSheet.create({
    constainer: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundColor: "#f8f9fa"
    },
    heading: {
        marginTop: 20,
        marginBottom: 10,
        fontSize: 17,
        color: "#3367d6",
        fontWeight: "bold"
    }
})
