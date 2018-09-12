import * as React from 'react';
import { View, Text, Button } from 'react-native';
import NavigationService from '../navigation/NavigationService';
import styles from '../styles/styles';

export interface Props {
}

export function Profile(props: Props) {
  return (
    <View style={styles.containerOffset}>
      <Text>Profile</Text>
      <Button title="Toggle Drawer" onPress={() => { NavigationService.toggleDrawer(); }} />
    </View>
  );
}