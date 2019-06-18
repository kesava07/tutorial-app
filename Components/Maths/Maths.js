import React, { Component } from 'react'
import { Text, View, StyleSheet, ScrollView } from 'react-native'
import TopicsList from '../TopicsList/TopicsList';

export class Maths extends Component {
    state = {
        topics: [
            "Algebra",
            "Calculus and analysis",
            "Geometry and topology",
            "Combinatorics",
            "Logic",
            "Number theory",
            "Dynamical systems",
            "Differential equations",
        ]
    }
    render() {
        const { topics } = this.state;
        return (
            <View style={styles.constainer}>
                <View style={{ width: "100%" }}>
                    <Text style={[styles.heading, {  }]}>Topics on Maths</Text>
                </View>
                <ScrollView style={{ width: "100%" }}>

                    {topics && topics.map((val, i) => <TopicsList key={i} topics={val} />)}

                </ScrollView>
            </View>
        )
    }
}

export default Maths;

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
        fontWeight: "bold",
        position: 'relative',
         left: "36%"
    }
})
