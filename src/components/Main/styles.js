import { StyleSheet } from 'react-native'
import { FONT, FONT_COLOR } from '../../ui/theme'

export default StyleSheet.create({
  myHue: {
    marginTop: 45,
    marginBottom: 40,
    marginLeft: 30,
    fontSize: 27,
    fontFamily: FONT,
    color: FONT_COLOR,
    fontWeight: 'bold',
  },
  tabStyle: {
    borderBottomWidth: 0,
    height: 29,
    paddingBottom: 2,
  },
  tabBarTextStyle: {
    fontFamily: FONT,
    fontSize: 20,
    letterSpacing: 1,
  },
  tabBarUnderlineStyle: {
    backgroundColor: '#F3A48A',
    width: 54,
    left: 41,
  },
})
