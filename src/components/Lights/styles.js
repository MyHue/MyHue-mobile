import { StyleSheet } from 'react-native'
import { FONT, FONT_COLOR, MAIN, LIGHT_GRAY, DARK_GRAY } from '../../ui/theme'

export default StyleSheet.create({
  listContainerStyle: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 20,
    width: 100,
  },
  sideMenuContainer: {
    backgroundColor: '#F7F7F7',
    width: 100,
  },
  listText: {
    fontFamily: 'Futura',
    color: '#95989A'
  },
  lightBulb: {
    height: 80,
    width: 80,
    marginLeft: 40,
  },
  lightsArea: {
    flexDirection: 'row',
    height: 127,
    backgroundColor: '#F9E5DB',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: 30,
  },
  lightOnOff: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  areaName: {
    fontSize: 20,
    color: FONT_COLOR,
    fontFamily: FONT,
  },
  onOffButton: {
    height: 37,
    width: 98,
    backgroundColor: MAIN,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 16,    
  },
  onOffText: {
    fontSize: 17,
    fontFamily: FONT,
    color: 'white',
  },
  contentTitle: {
    fontFamily: FONT,
    color: FONT_COLOR,
    fontSize: 20,
    marginBottom: 10,
  },
  contentContainer: {
    padding: 20
  },
  divideContent: {
    borderWidth: 1,
    borderColor: LIGHT_GRAY,
    marginVertical: -15,
    height: 0,
  },
  bulbContainer: {
    alignItems: 'center',
    marginRight: 34,
    marginBottom: 15,
  },
  bulbImg: {
    height: 36,
    width: 36,
  },
  bulbImgBackground: {
    height: 50,
    width: 50,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
  },
  addLight: {
    color: 'white',
    backgroundColor: 'transparent',
    fontSize: 30,
  },
  lightName: {
    fontSize: 14,
    fontFamily: FONT,
    color: DARK_GRAY,
  },
})
