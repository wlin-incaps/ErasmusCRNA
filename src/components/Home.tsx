import * as React from 'react';
import { View, Text, Button } from 'react-native';

export interface Props {
  onLogoutClicked?: () => void;
}

export function Home(props: Props) {
  return (
    <View>
      <Text>Home</Text>
      <Button title="Logout" onPress={() => { if(props.onLogoutClicked) { props.onLogoutClicked() } }} />
    </View>
  );
}