import React, { Component } from 'react'
import { View, Text } from 'react-native'
import ScrollableTabView, { DefaultTabBar } from 'react-native-scrollable-tab-view'
import Lights from '../../components/Lights'
import Profile from '../../components/Profile'
import TabBar from './tabBar'

import styles from './styles'

class Main extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Text style={styles.myHue}>My Hue</Text>

        <ScrollableTabView renderTabBar={() => <DefaultTabBar />} initialPage={0}>
          <Lights tabLabel="Lights" />
          <Profile tabLabel="Profile" />
        </ScrollableTabView>
      </View>
    )
  }
}

export default Main
