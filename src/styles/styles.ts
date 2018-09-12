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
    flex: 2,
    backgroundColor: '#000'
  },
  loginBottom: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});