import * as React from 'react';
import { Button, View, Text, ScrollView, Dimensions } from 'react-native';
import styles from '../styles/styles';
import ConnectEntityFeed from '../containers/ConnectEntityFeed';

export interface Props {
  onLogoutClicked: () => void;
}

export function Home(props: Props) {
  return (
    <View style={styles.container}>
      <Button title="Logout" onPress={props.onLogoutClicked} />
      <ConnectEntityFeed pageSize={20} scrollBuffer={Dimensions.get('screen').height * 2}/>
    </View>
  );
}