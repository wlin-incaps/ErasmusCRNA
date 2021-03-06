import * as React from 'react';
import { View, Text } from 'react-native';
import styles from '../styles/styles';

export interface Props {
  onDidMount: () => void;
}

export class Splash extends React.Component<Props> {
  constructor(public props: Props) {
    super(props);
  }

  componentDidMount() {
    this.props.onDidMount();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Getting Authentication...</Text>
      </View>
    );
  }
}