import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'
import { LIGHT_GRAY } from '../../ui/theme'

import styles from './styles' 

class Color extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.contentContainer}>
          <Text style={styles.contentTitle}>Color</Text>

          <View style={{ flexDirection: 'row', justifyContent: 'flex-start', flexWrap: 'wrap' }}>
            <View style={styles.bulbContainer}>
              <View style={[styles.bulbImgBackground, { backgroundColor: '#ECF0F1'}]}>
                <Image source={require('../../assets/bulb.png')} style={styles.bulbImg} />
              </View>

              <Text style={styles.lightName}>All</Text>
            </View>

            <View style={styles.bulbContainer}>
              <View style={[styles.bulbImgBackground, { backgroundColor: '#88E3FA'}]}>
                <Image source={require('../../assets/bulb.png')} style={styles.bulbImg} />
              </View>
              <Text style={styles.lightName}>Light 1</Text>
            </View>
            
            <View style={styles.bulbContainer}>
              <View style={[styles.bulbImgBackground, { backgroundColor: '#E284F8'}]}>
                <Image source={require('../../assets/bulb.png')} style={styles.bulbImg} />
              </View>

              <Text style={styles.lightName}>Light 2</Text>
            </View>

            <View style={styles.bulbContainer}>
              <View style={[styles.bulbImgBackground, { backgroundColor: '#ECF0F1' }]}>
                <Text style={styles.addLight}>+</Text>
              </View>

              <Text style={styles.lightName}>New</Text>
            </View>
          </View>
        </View>

        <View style={styles.divideContent} />
      </View>
    )
  }
}

export default Color
