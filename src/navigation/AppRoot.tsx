import { createSwitchNavigator, createDrawerNavigator, createStackNavigator } from "react-navigation";
import ConnectSplash from "../containers/ConnectSplash";
import ConnectLogin from "../containers/ConnectLogin";
import ConnectHome from "../containers/ConnectHome";
import * as React from 'react';
import NavigationService from "./NavigationService";
import { Profile } from "../components/Profile";
import { Icon } from "react-native-elements";
import { View, Text } from "react-native";
import { HeaderAddIcon } from "../components/HeaderAddIcon";
import { WebBrowser, Font } from "expo";
import { common } from "../styles/styles";
import ConnectLogo from "../containers/ConnectLogo";

const AppStack = createStackNavigator(
  {
    Main: {
      screen: ConnectHome,
      navigationOptions: {
        headerTitle: <ConnectLogo fontSize={26} />,
        headerLeft: <Icon name="menu" color="#fff" underlayColor={common.colors.logoBack} onPress={() => { NavigationService.toggleDrawer(); }} />,
        headerRight:
          (<View style={{ flexDirection: 'row' }}>
            <Icon name="open-in-browser" color="#fff" underlayColor={common.colors.logoBack} onPress={async () => { const result = await WebBrowser.openBrowserAsync('https://google.com'); }} />
            <HeaderAddIcon />
          </View>),
        headerStyle: { backgroundColor: common.colors.logoBack },
        headerTitleStyle: {}
      }
    }
  },
  {
    
  }
);

const ProfileStack = createStackNavigator(
  {
    Profile: {
      screen: Profile,
      navigationOptions: {
        title: 'Profile',
        headerLeft: <Icon name="menu" color="#fff" underlayColor={common.colors.logoBack} onPress={() => { NavigationService.toggleDrawer(); }} />,
        headerRight:
          (<View style={{ flexDirection: 'row' }}>
            <Icon name="open-in-browser" color="#fff" underlayColor={common.colors.logoBack} onPress={() => { }} />
            <HeaderAddIcon />
          </View>),
        headerStyle: { backgroundColor: common.colors.logoBack },
        headerTitleStyle: { color: '#fff' }
      }
    }
  },
  {
    
  }
);

const AppDrawer = createDrawerNavigator(
  {
    Home: AppStack,
    Profile: ProfileStack
  },
  {
    drawerBackgroundColor: common.colors.logoBack,
    contentOptions: {
      labelStyle: { color: '#fff' },
      activeBackgroundColor: common.colors.logoPrimary
    }
  }
);

const RootNavigator = createSwitchNavigator(
  {
    initialize: ConnectSplash,
    login: ConnectLogin,
    app: AppDrawer
  },
  {
    initialRouteName: 'initialize'
  }
);

export interface Props {
  hasFonts?: boolean;
  setFontsLoaded?: (hasFonts: boolean) => void;
}

export class AppRoot extends React.Component<Props> {
  async componentDidMount() {
    try{
      let fonts:any = {};
      fonts[common.fonts.serif] = require('../assets/fonts/SourceSerifPro-Regular.ttf');
      fonts[common.fonts.sans] = require('../assets/fonts/Oxygen-Regular.ttf');
      await Font.loadAsync(fonts);

      if(this.props.setFontsLoaded) { this.props.setFontsLoaded(true); }
    }
    catch(err) {
      console.log('Error while loading fonts');
      console.log(err);
      if(this.props.setFontsLoaded) { this.props.setFontsLoaded(false); }
    }
  }

  render() {
    return (
      <RootNavigator ref={(navigatorRef:any) => { NavigationService.setTopLevelNavigator(navigatorRef); }}/>
    );
  }
}