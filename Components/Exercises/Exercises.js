import React, { Component } from 'react'
import { Text, View, StyleSheet, ScrollView, TouchableOpacity, Dimensions } from 'react-native'
import TopicsList from '../TopicsList/TopicsList';
import Axios from 'axios'
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';
import Loader from '../Loader/Loader';



const WIDTH = Dimensions.get('window').width;

export class Exercises extends Component {
    state = {
        exercices: [],
        error: null,
        loading: false
    };
    componentDidMount() {
        this.getBooksData()
    };
    getBooksData = () => {
        this.setState({ loading: true })
        Axios.get("https://native-authenticationa-app.firebaseio.com/Exercices/Exercises.json")
            .then(response => {
                this.setState({ exercices: response.data, loading: false })
            })
            .catch(error => {
                this.setState({ error, loading: false })
            })
    }
    render() {
        const { exercices, loading } = this.state;
        let displayContent = <Loader loading={loading} />
        if (exercices.length > 0) {
            displayContent = (
                <React.Fragment>
                    <View style={{ width: "100%", justifyContent: "center", alignItems: 'center', marginTop: 20 }}>
                        <Text style={{ fontSize: 15, color: "#1a73e8", fontWeight: 'bold' }}>Chapter:1</Text>
                        {exercices && exercices.map((exercice, i) => {
                            if (exercice.CID === 1) {
                                return (
                                    <TouchableOpacity key={exercice.EID} style={[styles.cards, { justifyContent: 'space-evenly' }]} >
                                        <Icon name="arrow-right" color="#3367d6" style={{ width: 100, position: 'relative', left: 40, top: 5 }} />
                                        <Text style={{ fontSize: 20, fontWeight: "400", width: 310 }}>{exercice.ETL}</Text>
                                    </TouchableOpacity>

                                )
                            }
                        })
                        }
                    </View>
                    <View style={{ width: "100%", justifyContent: "center", alignItems: 'center', marginTop: 20 }}>
                        <Text style={{ fontSize: 15, color: "#1a73e8", fontWeight: 'bold' }}>Chapter:2</Text>
                        {exercices && exercices.map((exercice, i) => {
                            if (exercice.CID === 2) {
                                return (
                                    <TouchableOpacity key={exercice.EID} style={[styles.cards, { justifyContent: 'space-evenly' }]} >
                                        <Icon name="arrow-right" color="#3367d6" style={{ width: 100, position: 'relative', left: 40, top: 5 }} />
                                        <Text style={{ fontSize: 20, fontWeight: "400", width: 310 }}>{exercice.ETL}</Text>
                                    </TouchableOpacity>

                                )
                            }
                        })
                        }
                    </View>
                    <View style={{ width: "100%", justifyContent: "center", alignItems: 'center', marginTop: 20 }}>
                        <Text style={{ fontSize: 15, color: "#1a73e8", fontWeight: 'bold' }}>Chapter:3</Text>
                        {exercices && exercices.map((exercice, i) => {
                            if (exercice.CID === 3) {
                                return (
                                    <TouchableOpacity key={exercice.EID} style={[styles.cards, { justifyContent: 'space-evenly' }]} >
                                        <Icon name="arrow-right" color="#3367d6" style={{ width: 100, position: 'relative', left: 40, top: 5 }} />
                                        <Text style={{ fontSize: 20, fontWeight: "400", width: 310 }}>{exercice.ETL}</Text>
                                    </TouchableOpacity>

                                )
                            }
                        })
                        }
                    </View>
                    <View style={{ width: "100%", justifyContent: "center", alignItems: 'center', marginTop: 20 }}>
                        <Text style={{ fontSize: 15, color: "#1a73e8", fontWeight: 'bold' }}>Chapter:4</Text>
                        {exercices && exercices.map((exercice, i) => {
                            if (exercice.CID === 4) {
                                return (
                                    <TouchableOpacity key={exercice.EID} style={[styles.cards, { justifyContent: 'space-evenly' }]} >
                                        <Icon name="arrow-right" color="#3367d6" style={{ width: 100, position: 'relative', left: 40, top: 5 }} />
                                        <Text style={{ fontSize: 20, fontWeight: "400", width: 310 }}>{exercice.ETL}</Text>
                                    </TouchableOpacity>

                                )
                            }
                        })
                        }
                    </View>
                </React.Fragment>
            )
        }
        return (
            <View style={styles.constainer}>
                <ScrollView style={{ width: "100%" }}>
                    {displayContent}
                </ScrollView>
            </View>
        )
    }
}

export default Exercises;


const styles = StyleSheet.create({
    constainer: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundColor: "#f8f9fa"
    },
    cards: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.5,
        shadowRadius: 1,
        elevation: 5,
        marginTop: 10,
        marginBottom: 10,
        backgroundColor: 'white',
        width: WIDTH - 50,
        padding: 15,
        borderRadius: 5,
        flexDirection: 'row'
    }
})
