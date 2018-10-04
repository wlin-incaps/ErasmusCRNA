import { StyleSheet, Dimensions } from "react-native";
import { Constants } from 'expo';

export const common = {
  colors: {
    logoBack: 'rgb(36, 50, 64)',
    logoPrimary: 'rgb(122, 220, 187)',
    logoSecondary: 'rgb(156, 165, 174)',
    neutralGray: 'rgb(233, 233, 239)',
    facebookBlue: '#3b5998',
    googleRed: '#dd4b39'
  },
  size: {
    logoHeight: 70,
    logoBorder: 3
  },
  fonts: {
    serif: 'source-serif-pro-regular',
    sans: 'oxygen-regular'
  }
}

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: common.colors.neutralGray
  },
  containerOffset: {
    flex: 1,
    paddingTop: Constants.statusBarHeight
  },
  logoContainer: {
    position: 'absolute',
    top: 0,
    left: Dimensions.get('window').width/2 - common.size.logoHeight/2,
    width: common.size.logoHeight,
    height: common.size.logoHeight,
    backgroundColor: common.colors.logoBack,
    borderColor: common.colors.logoPrimary,
    borderRadius: common.size.logoHeight,
    borderWidth: common.size.logoBorder,
    alignItems: 'center',
    justifyContent: 'center'
  },
  logoText: {
    marginTop: -common.size.logoHeight/4 + 2,
    color: '#fff',
    fontSize: common.size.logoHeight,
    fontFamily: common.fonts.serif
  },
  loginTitleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 150,
    marginTop: common.size.logoHeight/2 + 10
  },
  loginTitleBackTop: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    height: common.size.logoHeight/2,
    backgroundColor: '#fff',
    borderBottomColor: common.colors.logoPrimary,
    borderBottomWidth: common.size.logoBorder
  },
  loginTitleFirst: {
    color: common.colors.logoPrimary,
    fontSize: common.size.logoHeight,
    fontFamily: common.fonts.serif
  },
  loginTitleSecond: {
    color: common.colors.logoSecondary,
    fontSize: common.size.logoHeight,
    fontFamily: common.fonts.serif
  },
  loginTitleUnderline: {
    borderBottomColor: common.colors.logoPrimary,
    borderBottomWidth: common.size.logoBorder,
    height: common.size.logoHeight + 10
  },
  loginBottom: {
    flex: 3,
    backgroundColor: common.colors.logoBack,
    alignItems: 'stretch',
    justifyContent: 'flex-start'
  },
  loginTagline: {
    color: '#fff',
    fontStyle: 'italic',
    fontFamily: common.fonts.sans,
    fontSize: common.size.logoHeight/3
  },
  loginTop: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff'
  },
  loginButtonContainer: {
    flex:1,
    alignItems: 'stretch',
    justifyContent: 'center',
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20
  },
  loginButton: {
    marginBottom: 10,
  },
  loginButtonIcon: {
    width: 25
  },
  loginButtonText: {
    flex: 1,
    textAlign: 'center',
    borderLeftWidth: 1,
    borderLeftColor: '#fff'
  },
  loginLink: {
    marginTop: 10,
    color: common.colors.logoSecondary,
    fontSize: 18
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