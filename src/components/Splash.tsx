import * as React from 'react';
import { View, Text, Button } from 'react-native';

export interface Props {
  onDidMount?: () => void;
}

export class Splash extends React.Component<Props> {
  constructor(public props: Props) {
    super(props);
  }

  componentDidMount() {
    if(this.props.onDidMount) {
      this.props.onDidMount();
    }
  }

  render() {
    return (
      <View>
        <Text>Loading...</Text>
        <Button title='fetch' onPress={() => this.props.onDidMount ? this.props.onDidMount(): null} />
      </View>
    );
  }
}