import * as React from 'react';
import { View, Button } from 'react-native';
import { StoreState } from '../store/StoreState';
import ConnectSplash from '../containers/ConnectSplash';
import ConnectLogin from '../containers/ConnectLogin';
import { SafeKey, SafeStore } from '../store/SafeStore';
import ConnectHome from '../containers/ConnectHome';

export interface Props {
  isInitialized?: boolean;
  isAuthenticated?: boolean;
  state?: StoreState;
}

export function Main(props: Props) {
  return (
    <View>
      {!props.isInitialized?
        (<ConnectSplash />) :
        props.isAuthenticated?
          (<ConnectHome />) :
          (<ConnectLogin />)
      }
      <Button title='state' onPress={() => console.log(props.state)} />
      <Button title='storage' onPress={async () => { console.log(await SafeStore.multiGet([SafeKey.AccessToken, SafeKey.AccessTokenExpires])); }} />
    </View>
  );
}