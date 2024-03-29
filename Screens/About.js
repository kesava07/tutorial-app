import React, { Component } from 'react'
import {
    StyleSheet,
    View,
    Text,
    ScrollView,
    TouchableOpacity,
    PixelRatio,
    Dimensions,
    Platform,
} from 'react-native'
import { Actions } from 'react-native-router-flux';
import YouTube, { YouTubeStandaloneIOS, YouTubeStandaloneAndroid } from 'react-native-youtube';

export class About extends Component {
    state = {
        isReady: false,
        status: null,
        quality: null,
        error: null,
        isPlaying: true,
        isLooping: true,
        duration: 0,
        currentTime: 0,
        fullscreen: false,
        containerMounted: false,
        containerWidth: null,
    };
    render() {
        return (
            <ScrollView
                // style={styles.container}
                onLayout={({ nativeEvent: { layout: { width } } }) => {
                    if (!this.state.containerMounted) this.setState({ containerMounted: true });
                    if (this.state.containerWidth !== width) this.setState({ containerWidth: width });
                }}
            >

                {/* <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                    <Text style={{ color: "black", fontSize: 25, fontWeight: "bold" }} onPress={() => Actions.profile()}> About </Text>
                </View> */}

                {this.state.containerMounted && (
                    <YouTube
                        ref={component => {
                            this._youTubeRef = component;
                        }}
                        // You must have an API Key for the player to load in Android
                        apiKey="YOUR_API_KEY"
                        // Un-comment one of videoId / videoIds / playlist.
                        // You can also edit these props while Hot-Loading in development mode to see how
                        // it affects the loaded native module
                        videoId="xm5CVCzC1S8"
                        // videoIds={['xm5CVCzC1S8', 'jcduNDeazLQ', 'MpdX2JOxfds', 'sOHlrupp7NY']}
                        // playlistId="PLF797E961509B4EB5"
                        play={this.state.isPlaying}
                        loop={this.state.isLooping}
                        fullscreen={this.state.fullscreen}
                        controls={1}
                        style={[
                            { height: PixelRatio.roundToNearestPixel(this.state.containerWidth / (16 / 9)) },
                            // styles.player,
                        ]}
                        onError={e => this.setState({ error: e.error })}
                        onReady={e => this.setState({ isReady: true })}
                        onChangeState={e => this.setState({ status: e.state })}
                        onChangeQuality={e => this.setState({ quality: e.quality })}
                        onChangeFullscreen={e => this.setState({ fullscreen: e.isFullscreen })}
                        onProgress={e => this.setState({ duration: e.duration, currentTime: e.currentTime })}
                    />
                )}


            </ScrollView>

        )
    }
}

export default About
