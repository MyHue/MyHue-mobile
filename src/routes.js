import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import Main from './components/Main'

const Routes = () => (
  <Router sceneStyle={{ backgroundColor: '#FFF' }}>
    <Scene root="root">
      <Scene key="home" component={Main} hideNavBar />
    </Scene>
  </Router>
)

export default Routes
