import * as React from 'react';
import { View, Text } from 'react-native';
import styles from '../styles/styles';

export interface Props {
}

export function EntityList(props: Props) {
  return (
    <View style={styles.container}>
      <Text>Hello World</Text>
    </View>
  );
}