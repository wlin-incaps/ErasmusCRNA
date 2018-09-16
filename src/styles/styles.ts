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
  },
  modalBackdrop: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00000080'
  },
  modal: {
    height: 300
  },
  carouselTitle: {
    padding: 10,
    fontWeight: 'bold',
    fontSize: 15
  },
  entitySlide: {
    height: 300,
    width: 300,
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    shadowColor: 'red',
    shadowRadius: 20,
    shadowOffset: { height: 5, width: 5 }
  },
  entitySlideImage: {
    height: 200,
    width: 298,
    backgroundColor: '#ddd'
  },
  entitySlideBottom: {
    height:100,
    width:298,
    padding: 10
  },
  entitySlideTitle: {
    fontWeight: 'bold',
    paddingBottom: 5
  },
  gridTitle: {
    padding: 10,
    fontWeight: 'bold',
    fontSize: 15
  },
  entityGridRow: {
    flex: 1,
    height: 100,
    flexDirection: 'row'
  },
  entityGridCell: {
    flex: 1,
    flexDirection: 'column',
    borderWidth: 1,
    borderColor: '#ddd',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5
  }
});