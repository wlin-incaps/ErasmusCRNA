import * as React from 'react';
import {View, StatusBar, Dimensions, Text } from "react-native";
import styles, { common } from '../styles/styles';
import { Button } from 'react-native-elements';
import ConnectLogo from '../containers/ConnectLogo';

export interface Props {
  onFacebookClicked: () => void;
  onGoogleClicked: () => void;
  hasFonts: boolean;
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
        {
          this.props.hasFonts?
          <View style={styles.loginBottom}>
            <View style={styles.loginTitleBackTop} />
            <View style={styles.logoContainer}>
              <Text style={styles.logoText}>e</Text>
            </View>
            <View style={styles.loginTitleContainer}>
              <ConnectLogo fontSize={70} />
              <Text style={styles.loginTagline}>Share. Discuss. Discover.</Text>
            </View>
            <View style={styles.loginButtonContainer}>
              <Button
                containerViewStyle={styles.loginButton}
                backgroundColor={common.colors.facebookBlue}
                borderRadius={5}
                fontFamily={common.fonts.sans}
                fontSize={18}
                raised
                textStyle={styles.loginButtonText}
                title="Login with Facebook"
                icon={{name: 'facebook', type: 'zocial', style: styles.loginButtonIcon}}
                onPress={() => { this.props.onFacebookClicked() }}
              />
              <Button
                containerViewStyle={styles.loginButton}
                backgroundColor={common.colors.googleRed}
                borderRadius={5}
                fontFamily={common.fonts.sans}
                fontSize={18}
                raised
                textStyle={styles.loginButtonText}
                title="Login with Google"
                icon={{name: 'google', type: 'zocial', style: styles.loginButtonIcon}}
                onPress={() => { this.props.onGoogleClicked() }}
              />
              <Button
                containerViewStyle={styles.loginButton}
                backgroundColor={common.colors.logoSecondary}
                borderRadius={5}
                fontFamily={common.fonts.sans}
                fontSize={18}
                raised
                icon={{name: 'user', type: 'entypo', color: '#fff', style: styles.loginButtonIcon}}
                textStyle={styles.loginButtonText}
                title="Login"
                onPress={() => {}}
              />
              <View style={{alignItems: 'center'}}>
                <Text style={styles.loginLink}>Create New Account</Text>
              </View>
            </View>
          </View> : null
        }
      </View>
    );
  }
}