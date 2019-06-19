import React, { Component } from 'react'
import {
    Text,
    View,
    StyleSheet,
    ScrollView,
    Dimensions,
    Image,
    TouchableOpacity
} from 'react-native'
import Axios from 'axios';
import Loader from '../Loader/Loader';

const WIDTH = Dimensions.get('window').width;
export class Books extends Component {
    state = {
        booksData: [],
        error: null,
        loading: false
    };
    componentDidMount() {
        this.getBooksData()
    };
    getBooksData = () => {
        this.setState({ loading: true })
        Axios.get("https://native-authenticationa-app.firebaseio.com/Books/Books.json")
            .then(response => {
                this.setState({ booksData: response.data, loading: false })
            })
            .catch(error => {
                this.setState({ error, loading: false })
            })
    }
    render() {
        const { booksData, loading } = this.state;
        return (
            <View style={styles.constainer}>
                <ScrollView style={{ width: "100%" }}>
                    <View style={{ width: "100%", justifyContent: "center", alignItems: 'center', marginTop: 20 }}>
                        {loading && <Loader loading={loading} />}
                        {booksData && booksData.map(val => (
                            <TouchableOpacity key={val.BID} style={[styles.welcomeCard, styles.shadow]} >
                                <Image source={{ uri: val.BIMG }} style={styles.imageStyles} />
                                <Text style={{ fontSize: 20 }}>{val.BTL}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                </ScrollView>
            </View>
        )
    }
}

export default Books;


const styles = StyleSheet.create({
    constainer: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundColor: "#f8f9fa"
    },
    welcomeCard: {
        backgroundColor: "white",
        justifyContent: "flex-start",
        alignItems: 'center',
        width: WIDTH - 30,
        // marginTop: 20,
        marginBottom: 20,
        padding: 15,
        borderRadius: 5,
        flexDirection: 'row'
    },
    shadow: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.5,
        shadowRadius: 1,
        elevation: 5
    },
    imageStyles: {
        height: 100,
        width: 80,
        marginRight: 15
    }
})
