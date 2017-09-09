import React, { Component } from 'react'
import { View, Text, ScrollView, TouchableOpacity, FlatList } from 'react-native'

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
      <View>
        <FlatList
          style={{ backgroundColor: '#F7F7F7', width: 100, paddingHorizontal: 10 }}
          data={lightAreas}
          renderItem={({item}) => (
            <TouchableOpacity id={item.id} style={{ height: 20, marginVertical: 20 }}>
              <Text style={{ fontFamily: 'Futura', color: '#95989A' }}>{item.area}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item, index) => index}
        />
      </View>
    )
  }
}

export default SideMenu
// style={{ backgroundColor: '#F7F7F7', width: 100 }}