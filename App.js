import React, { Component } from 'react'
import { Router, Scene } from 'react-native-router-flux'
import Home from './Screens/Home'
import About from './Screens/About'
import Profile from './Screens/Profile'
import Icon from 'react-native-vector-icons/FontAwesome'
import Maths from './Components/Maths/Maths';
import physics from './Components/Physics/physics';


const TabIcon = ({ focused, title }) => {
  let displayIcon = null;
  if (title === "Home") {
    displayIcon = <Icon name="home" size={25} color={focused ? '#1a73e8' : 'black'} />
  } else if (title === "About") {
    displayIcon = <Icon name="info-circle" size={25} color={focused ? '#1a73e8' : 'black'} />
  } else if (title === "Profile") {
    displayIcon = <Icon name="user-circle-o" size={25} color={focused ? '#1a73e8' : 'black'} />
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
              backgroundColor: "#ffffff",
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 1 },
              shadowOpacity: 0.5,
              shadowRadius: 1,
              elevation: 5
            }}
            showLabel={false}
          >

            <Scene key="home" title="Home" icon={TabIcon}
              titleStyle={{ width: "50%" }}
            >
              <Scene
                key="homeScreen"
                component={Home}
                title="Home"
                initial
              />
              <Scene
                key="maths"
                component={Maths}
                title="Maths"
              />
              <Scene
                key="physics"
                component={physics}
                title="Physics"
              />
            </Scene>

            <Scene key="about" title="About" icon={TabIcon} titleStyle={{ width: "50%" }}>
              <Scene
                key="aboutScreen"
                component={About}
                title="About"
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
