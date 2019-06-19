import React, { Component } from 'react'
import { Router, Scene } from 'react-native-router-flux'
import Home from './Screens/Home'
import About from './Screens/About'
import Profile from './Screens/Profile'
import Icon from 'react-native-vector-icons/FontAwesome'
import Books from './Components/Books/Books';
import Exercises from './Components/Exercises/Exercises';
import Questions from './Components/Questions/Quesions';
import Chapters from './Components/Chapters/Chapters'


const TabIcon = ({ focused, title }) => {
  let displayIcon = null;
  if (title === "Home") {
    displayIcon = <Icon name="home" size={20} color={focused ? '#1a73e8' : 'gray'} />
  } else if (title === "Videos") {
    displayIcon = <Icon name="play-circle-o" size={20} color={focused ? '#1a73e8' : 'gray'} />
  } else if (title === "Profile") {
    displayIcon = <Icon name="user-circle-o" size={20} color={focused ? '#1a73e8' : 'gray'} />
  }
  return displayIcon;
}

export class App extends Component {
  render() {
    return (
      <Router>
        <Scene key="root" hideNavBar headerLayoutPreset="center" headerMode="float" >

          <Scene
            key="tabbar"
            tabs
            tabBarStyle={{
              padding:5,
              borderTopColor:'lightgray'
            }}
            // showLabel={false}
            inactiveTintColor="gray"
          >

            <Scene key="home" title="Home" icon={TabIcon}
              titleStyle={{ width: "50%" }}
            // navigationBarStyle={{ backgroundColor: '#3367d6' }}
            >
              <Scene
                key="homeScreen"
                component={Home}
                title="Home"
                initial
              />
              <Scene
                key="books"
                component={Books}
                title="Books"
              />
              <Scene
                key="exercises"
                component={Exercises}
                title="Exercises"
              />
              <Scene
                key="questions"
                component={Questions}
                title="Questions"
              />
              <Scene
                key="chapters"
                component={Chapters}
                title="Chapters"
              />
              {/* <Scene
                key="videoPlyer"
                component={VIdeoPlayer}
                title="Video"
              /> */}
            </Scene>

            <Scene key="videoTab" title="Videos" icon={TabIcon} titleStyle={{ width: "50%" }}>
              <Scene
                key="VideosScreen"
                component={About}
                title="Videos"
              />
            </Scene>

            <Scene key="profile" title="Profile" icon={TabIcon} titleStyle={{ width: "50%" }}>
              <Scene
                key="profileScreen"
                component={Profile}
                title="Profile"
              />
            </Scene>
          </Scene>
        </Scene>
      </Router>
    )
  }
}

export default App
