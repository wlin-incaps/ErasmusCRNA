import * as React from 'react';
import styles from '../styles/styles';
import { View } from 'react-native';
import { EntityGrid } from './EntityGrid';

export interface Props {
}

export function Profile(props: Props) {
  return (
    <View style={styles.container}>
      <EntityGrid title='Friends' />
    </View>
  );
}