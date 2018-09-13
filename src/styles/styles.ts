import { StyleSheet } from "react-native";
import { Constants } from 'expo';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  containerOffset: {
    flex: 1,
    paddingTop: Constants.statusBarHeight
  },
  loginTop: {
    flex: 3,
    backgroundColor: '#000'
  },
  loginBottom: {
    flex: 2,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center'
  },
  loginFacebook: {
    paddingBottom: 20,
  }
});