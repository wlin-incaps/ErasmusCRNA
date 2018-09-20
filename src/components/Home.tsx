import * as React from 'react';
import { Button, View, Text, ScrollView } from 'react-native';
import styles from '../styles/styles';
import { EntityCarousel } from './EntityCarousel';

export interface Props {
  onLogoutClicked: () => void;
}

export function Home(props: Props) {
  return (
    <ScrollView style={styles.container}>
      <EntityCarousel title='Collections'/>
      <EntityCarousel title='People'/>
      <EntityCarousel title='Stuff'/>
      <Button title="Logout" onPress={() => { props.onLogoutClicked() }} />
    </ScrollView>
  );
}