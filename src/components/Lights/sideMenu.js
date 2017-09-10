import React, { Component } from 'react'
import { View, Text, ScrollView, TouchableOpacity, FlatList } from 'react-native'

import styles from './styles'

const lightAreas = [
  {area: 'Living Room'},
  {area: 'Bedroom'},
  {area: 'Bathroom'},
  {area: 'Kitchen'},
  {area: 'Bedroom'},
]

class SideMenu extends Component {
  render() {
    return (
      <View style={styles.sideMenuContainer}>
        <FlatList
          contentContainerStyle={styles.listContainerStyle}
          data={lightAreas}
          renderItem={({item}) => (
            <TouchableOpacity id={item.id} style={{ height: 30, marginVertical: 20, width: 100 }}>
              <Text style={styles.listText}>{item.area}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item, index) => index}
        />
      </View>
    )
  }
}

export default SideMenu
