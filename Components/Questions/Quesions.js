import React, { Component } from 'react'
import { Text, View, StyleSheet, ScrollView } from 'react-native'
import TopicsList from '../TopicsList/TopicsList';

export class Questions extends Component {
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
                <ScrollView style={{ width: "100%" }}>

                    {topics && topics.map((val, i) => <TopicsList key={i} topics={val} />)}

                </ScrollView>
            </View>
        )
    }
}

export default Questions;

const styles = StyleSheet.create({
    constainer: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundColor: "#f8f9fa"
    }
})
