import * as React from 'react';
import { Button, TextInput, View, AsyncStorage } from "react-native";
import * as Expo from 'expo';

export interface Props {
  loginFacebook?: (token: string) => void;
  storeToken?: (token: string, expires: number) => void
}

export default class Login extends React.Component<Props> {

  constructor(props: Props) {
    super(props);
  }

  async loginFacebook() {
    const{ type, token, expires } = await Expo.Facebook.logInWithReadPermissionsAsync('268055910349027', {
      permissions: ['public_profile', 'email']
    });

    if(this.props.storeToken) {
      this.props.storeToken(token? token : '', expires? expires : 0);
    }
    
    if(type === 'success' && token) {
      if(this.props.loginFacebook) {
        this.props.loginFacebook(token);
      }
    }
  }

  async loginGoogle() {

  }

  render() {
    return (
      <View>
        <Button title="Login with Facebook" onPress={() => this.loginFacebook()} />
        <Button title="Login with Google" onPress={() => this.loginGoogle()} />
      </View>
    );
  }
}