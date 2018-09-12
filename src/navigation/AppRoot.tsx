import { createSwitchNavigator, createDrawerNavigator } from "react-navigation";
import ConnectSplash from "../containers/ConnectSplash";
import ConnectLogin from "../containers/ConnectLogin";
import ConnectHome from "../containers/ConnectHome";
import * as React from 'react';
import NavigationService from "./NavigationService";
import { Profile } from "../components/Profile";

const AppDrawer = createDrawerNavigator(
  {
    Home: ConnectHome,
    Profile: Profile
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