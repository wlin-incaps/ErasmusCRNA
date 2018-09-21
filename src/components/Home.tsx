import * as React from 'react';
import { Button, View, Text, ScrollView, Dimensions } from 'react-native';
import styles from '../styles/styles';
import { EntityCarousel } from './EntityCarousel';
import { EntityFeed } from './EntityFeed';
import { StaggerGrid } from './StaggerGrid';

export interface Props {
  onLogoutClicked: () => void;
}

export function Home(props: Props) {
  return (
    <View style={styles.container}>
      <Button title="Logout" onPress={props.onLogoutClicked} />
      <StaggerGrid num={10000} pageSize={20} scrollBuffer={Dimensions.get('screen').height * 3} />
    </View>
  );
}