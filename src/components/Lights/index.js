import React, { Component } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import SideMenu from './sideMenu'
import Color from './color'

import styles from './styles'

class Lights extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.lightsArea}>
          <Image source={require('../../assets/bulb-on.png')} style={styles.lightBulb} />

          <View style={styles.lightOnOff}>
            <Text style={styles.areaName}>Living Room</Text>

            <TouchableOpacity style={styles.onOffButton}>
              <Text style={styles.onOffText}>Off</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <SideMenu />

          <Color />
        </View>
      </View>
    )
  }
}

export default Lights
