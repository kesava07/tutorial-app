import React from 'react';
import { TouchableOpacity, Text, Dimensions, StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'

const WIDTH = Dimensions.get('window').width;

const TopicsList = (props) => {
    return (
        <View style={{ width: "100%", justifyContent: "center", alignItems: 'center' }}>
            <TouchableOpacity style={[styles.cards, { justifyContent: 'space-evenly' }]}>
                <Icon name="arrow-right" color="#3367d6" style={{ width: 100, position: 'relative', left: 40, top: 5 }} />
                <Text style={{ fontSize: 20, fontWeight: "400", width: 310 }}>{props.topics}</Text>

            </TouchableOpacity>
        </View>
    )
};

export default TopicsList;

const styles = StyleSheet.create({
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