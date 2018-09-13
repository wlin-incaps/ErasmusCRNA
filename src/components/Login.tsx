import * as React from 'react';
import {View, StatusBar } from "react-native";
import styles from '../styles/styles';
import { Button } from 'react-native-elements';

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
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <View style={styles.loginTop} />
        <View style={styles.loginBottom}>
          <Button
            style={styles.loginFacebook}
            backgroundColor='#3b5998'
            large
            raised
            title="Login with Facebook"
            onPress={() => { if(this.props.onFacebookClicked) this.props.onFacebookClicked() }}
          />
          <Button
            backgroundColor='#dd4b39'
            large
            raised
            title="Login with Google"
            onPress={() => { if(this.props.onGoogleClicked) this.props.onGoogleClicked() }}
          />
        </View>
      </View>
    );
  }
}