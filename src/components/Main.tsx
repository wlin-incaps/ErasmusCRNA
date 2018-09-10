import * as React from 'react';
import { View, Text, Button } from 'react-native';
import Login from './Login';
import { StoreState } from '../store/StoreState';
import ConnectSplash from '../containers/ConnectSplash';
import ConnectLogin from '../containers/ConnectLogin';
import { LocalStorage, LocalKey } from '../store/LocalStorage';
import Home from './Home';

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
          (<Home />) :
          (<ConnectLogin />)
      }
      <Button title='state' onPress={() => console.log(props.state)} />
      <Button title='storage' onPress={async () => console.log(await LocalStorage.getAll())} />
    </View>
  );
}