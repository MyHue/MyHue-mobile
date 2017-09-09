import React, { Component } from 'react'
import { View, Text } from 'react-native'
import ScrollableTabView, { DefaultTabBar } from 'react-native-scrollable-tab-view'
import Lights from '../../components/Lights'
import Profile from '../../components/Profile'
import Settings from '../../components/Settings'
import TabBar from './tabBar'
import { FONT, DARK_GRAY, FONT_COLOR } from '../../ui/theme'

import styles from './styles'

class Main extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Text style={styles.myHue}>My Hue</Text>

        <ScrollableTabView
          renderTabBar={() => (
            <DefaultTabBar
              style={styles.tabStyle}
              underlineStyle={styles.underlineStyle}
            />
          )}
          initialPage={0}
          tabBarInactiveTextColor={DARK_GRAY}
          tabBarActiveTextColor={FONT_COLOR}
          tabBarTextStyle={styles.tabBarTextStyle}
          tabBarUnderlineStyle={styles.tabBarUnderlineStyle}
        >
          <Lights tabLabel="Lights" />
          <Profile tabLabel="Profile" />
          <Settings tabLabel="Settings" />
        </ScrollableTabView>
      </View>
    )
  }
}

export default Main
