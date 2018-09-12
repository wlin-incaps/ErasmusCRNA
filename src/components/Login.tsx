import * as React from 'react';
import { Button, View } from "react-native";
import styles from '../styles/styles';

export interface Props {
  onFacebookClicked?: () => void;
  onGoogleClicked?: () => void;
}

export default class Login extends React.Component<Props> {

  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.containerOffset}>
        <View style={styles.loginTop} />
        <View style={styles.loginBottom}>
          <Button title="Login with Facebook" onPress={() => { if(this.props.onFacebookClicked) this.props.onFacebookClicked() }} />
          <Button title="Login with Google" onPress={() => { if(this.props.onGoogleClicked) this.props.onGoogleClicked() }} />
        </View>
      </View>
    );
  }
}