import { createSwitchNavigator, createDrawerNavigator, createStackNavigator } from "react-navigation";
import ConnectSplash from "../containers/ConnectSplash";
import ConnectLogin from "../containers/ConnectLogin";
import ConnectHome from "../containers/ConnectHome";
import * as React from 'react';
import NavigationService from "./NavigationService";
import { Profile } from "../components/Profile";
import { Icon } from "react-native-elements";
import { View } from "react-native";
import { HeaderAddIcon } from "../components/HeaderAddIcon";
import { WebBrowser } from "expo";

const AppStack = createStackNavigator(
  {
    Main: {
      screen: ConnectHome,
      navigationOptions: {
        title: 'Home',
        headerLeft: <Icon name="menu" color="#fff" underlayColor="#000" onPress={() => { NavigationService.toggleDrawer(); }} />,
        headerRight:
          (<View style={{ flexDirection: 'row' }}>
            <Icon name="open-in-browser" color="#fff" underlayColor="#000" onPress={async () => { const result = await WebBrowser.openBrowserAsync('https://google.com'); }} />
            <HeaderAddIcon />
          </View>),
        headerStyle: { backgroundColor: '#000' },
        headerTitleStyle: { color: '#fff' }
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
        headerLeft: <Icon name="menu" color="#fff" underlayColor="#000" onPress={() => { NavigationService.toggleDrawer(); }} />,
        headerRight:
          (<View style={{ flexDirection: 'row' }}>
            <Icon name="open-in-browser" color="#fff" underlayColor="#000" onPress={() => { }} />
            <HeaderAddIcon />
          </View>),
        headerStyle: { backgroundColor: '#000' },
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
    drawerBackgroundColor: '#000',
    contentOptions: {
      labelStyle: { color: '#fff' },
      activeBackgroundColor: '#555'
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

export default function() {
  return (
    <RootNavigator ref={(navigatorRef:any) => { NavigationService.setTopLevelNavigator(navigatorRef); }}/>
  );
}