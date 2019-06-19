import React, { Component } from 'react'
import { Text, View, StyleSheet, ScrollView } from 'react-native'
import TopicsList from '../TopicsList/TopicsList';
import Axios from 'axios';
import Loader from '../Loader/Loader';


export class Chapters extends Component {
    state = {
        chapters: [],
        error: null,
        loading: false
    }
    componentDidMount() {
        this.getChapters()
    };
    getChapters = () => {
        this.setState({ loading: true })
        Axios.get("https://native-authenticationa-app.firebaseio.com/Chapters.json")
            .then(response => {
                this.setState({ chapters: response.data, loading: false })
            })
            .catch(error => {
                this.setState({ error, loading: false })
            })
    }
    render() {
        const { chapters, loading } = this.state;
        return (
            <View style={styles.constainer}>
                <ScrollView style={{ width: "100%", marginTop: 20 }}>
                    {loading && <Loader loading={loading} />}
                    {chapters && chapters.map((val, i) => <TopicsList key={i} topics={val.CTL} />)}
                </ScrollView>
            </View>
        )
    }
}

export default Chapters;


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
