import React from 'react'
import { View, ActivityIndicator, Modal, StyleSheet } from 'react-native';

const Loader = props => {
    const { loading } = props
    return (
        <Modal
            transparent={true}
            animationType={'none'}
            visible={loading}
            onRequestClose={() => { console.log('close modal') }}>
            <View style={styles.modalBackground}>
                <View style={styles.activityIndicatorWrapper}>
                    <ActivityIndicator
                        animating={loading} />
                </View>
            </View>
        </Modal>
        // <View style={[styles.container, styles.horizontal]}>
        //     <ActivityIndicator size="large" color="#0000ff" />
        //     <ActivityIndicator size="small" color="#00ff00" />
        //     <ActivityIndicator size="large" color="#0000ff" />
        //     <ActivityIndicator size="small" color="#00ff00" />
        // </View>
    )
};

export default Loader;

const styles = StyleSheet.create({
    modalBackground: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'space-around',
        backgroundColor: '#00000040'
    },
    activityIndicatorWrapper: {
        backgroundColor: '#FFFFFF',
        height: 100,
        width: 100,
        borderRadius: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    // container: {
    //     flex: 1,
    //     justifyContent: 'center',
    //     alignItems: 'center'
    // },
    // horizontal: {
    //     flexDirection: 'row',
    //     justifyContent: 'space-around',
    //     padding: 10
    // }
})