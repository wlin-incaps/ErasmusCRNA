import * as React from 'react';
import { Entity } from './EntityTile';
import { View, Text, Image, Dimensions, ScrollView } from 'react-native';
import { common } from '../styles/styles';
import utils from '../common/utils';
import { Icon } from 'react-native-elements';
import ConnectEntityFeed from '../containers/ConnectEntityFeed';

export interface Props {
  item: Entity
}

export class EntityDetail extends React.PureComponent<Props> {
  render() {
    return (
      <View style={{
        flex: 1
      }}>
        <View style={{
          alignContent: 'center',
          justifyContent: 'center',
          backgroundColor: common.colors.logoSecondary,
          height: 200,
        }}>
          {this.props.item.image?
            <Image source={{uri: this.props.item.image}}/> :
            <Icon name="image" color="#fff" size={50} underlayColor='#fff' />
          }
        </View>
        <View style={{
            height: 200,
            paddingHorizontal: 10,
            paddingVertical: 15,
            borderBottomColor: common.colors.logoPrimary,
            borderBottomWidth: common.size.logoBorder,
            backgroundColor: '#fff'
        }}>
          <ScrollView>
            {this.props.item.name?
              <Text style={{
                fontSize: 20,
                fontWeight: 'bold'
              }}>
                {this.props.item.name}
              </Text>: null
            }
            {this.props.item.title?
              <Text style={{
                fontSize: 20
              }}>
                {this.props.item.title}
              </Text>: null
            }
            {this.props.item.description?
              <Text style={{
                fontSize: 18
              }}>
                {this.props.item.description}
              </Text>: null
            }
          </ScrollView>
        </View>
        <View>
          <View style={{
            paddingHorizontal: 10,
            paddingVertical: 15
          }}>
            <Text style={{
              fontSize: 20,
              fontWeight: 'bold'
            }}>Related and recommended</Text>
          </View>
          <ConnectEntityFeed pageSize={20} scrollBuffer={Dimensions.get('screen').height * 2} />
        </View>
      </View>
    );
  }
}