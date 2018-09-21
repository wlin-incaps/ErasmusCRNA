import * as React from 'react';
import { View, Text } from 'react-native';
import styles from '../styles/styles';

export interface Props {
  entity: any;
}

export function EntityCard(props: Props) {
  return (
    <View style={styles.entitySlide}>
      <View style={styles.entitySlideImage}>

      </View>
      <View style={styles.entitySlideBottom}>
        <Text style={styles.entitySlideTitle}>{ props.entity.title }</Text>
        <Text>This is the description.</Text>
      </View>
    </View>
  );
}