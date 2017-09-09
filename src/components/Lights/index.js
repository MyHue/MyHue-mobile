import React, { Component } from 'react'
import { View, Text } from 'react-native'
import SideMenu from './sideMenu'

class Lights extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Text>Lights</Text>
        <SideMenu />
      </View>
    )
  }
}

export default Lights
