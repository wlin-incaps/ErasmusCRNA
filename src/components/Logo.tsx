import * as React from 'react';
import { View, Text } from 'react-native';
import { common } from '../styles/styles';

export interface Props {
  fontSize: number,
  hasFonts?: boolean
}

export function Logo(props: Props) {
  return (
    <View>
      {props.hasFonts?
        <View style={{
          flexDirection: 'row'
        }}>
          <Text style={{
            color: common.colors.logoPrimary,
            fontSize: props.fontSize,
            fontFamily: common.fonts.serif
          }}>erasm</Text>
          <View style={{
            height: props.fontSize + Math.ceil(props.fontSize/5),
            borderBottomColor: common.colors.logoPrimary,
            borderBottomWidth: Math.ceil(props.fontSize/20)
          }}>
            <Text style={{
              color: common.colors.logoSecondary,
              fontSize: props.fontSize,
              fontFamily: common.fonts.serif
            }}>us</Text>
          </View>
        </View> : null
      }
    </View>
  );
}