import * as React from 'react';
import { Button } from 'react-native';
import { HeaderView } from './HeaderView';

export interface Props {
  onLogoutClicked?: () => void;
}

export function Home(props: Props) {
  return (
    <HeaderView>
      <Button title="Logout" onPress={() => { if(props.onLogoutClicked) { props.onLogoutClicked() } }} />
    </HeaderView>
  );
}