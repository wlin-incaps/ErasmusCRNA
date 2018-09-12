import * as React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import NavigationService from '../navigation/NavigationService';
import styles from '../styles/styles';

export interface Props {
  onLogoutClicked?: () => void;
}

export function Home(props: Props) {
  return (
    <View style={styles.containerOffset}>
      <Text>Home</Text>
      <Button title="Toggle Drawer" onPress={() => { NavigationService.toggleDrawer(); }} />
      <Button title="Logout" onPress={() => { if(props.onLogoutClicked) { props.onLogoutClicked() } }} />
    </View>
  );
}