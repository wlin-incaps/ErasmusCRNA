import { NavigationActions, DrawerActions } from 'react-navigation';

let _navigator: any;

function setTopLevelNavigator(navigatorRef: any) {
  _navigator = navigatorRef;
}

function navigate(routeName: string, params: any) {
  _navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params,
    })
  );
}

function toggleDrawer() {
  _navigator.dispatch(
    DrawerActions.toggleDrawer()
  );
}

export default {
  navigate,
  setTopLevelNavigator,
  toggleDrawer
};