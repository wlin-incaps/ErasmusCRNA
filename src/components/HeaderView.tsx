import * as React from 'react';
import { View } from 'react-native';
import { Header, Icon } from 'react-native-elements';
import NavigationService from '../navigation/NavigationService';

export interface Props {
  children: any
}

export const HeaderView = (props: Props) => {
  return (
    <View>
      <Header
        statusBarProps = {{
          barStyle: "light-content"
        }}
        backgroundColor="#000"
        leftComponent={
          <Icon name="menu" color="#fff" underlayColor="#000" onPress={() => { NavigationService.toggleDrawer(); }} />
        }
        rightComponent={
          <Icon name="home" color="#fff" underlayColor="#000" onPress={() => { NavigationService.navigate('Home', {}); }} />
        }
      />
      {props.children}
    </View>
  );
};