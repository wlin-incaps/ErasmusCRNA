import * as React from 'react';
import { View, Text, Dimensions, Image, TouchableOpacity } from 'react-native';
import styles, { common } from '../styles/styles';
import { Icon, Avatar } from 'react-native-elements';
import utils from '../common/utils';
import NavigationService from '../navigation/NavigationService';

export interface Entity {
  id: number;
  name?:string;
  avatar?:string;
  title?:string;
  description?:string;
  detail?: string;
  image?:string;
  type?:string;
  url?:string;
}

export interface Props {
  item: Entity;
  selectItem?: (itemId: number) => void;
}

export class EntityTile extends React.PureComponent<Props> {

  constructor(props:Props) {
    super(props);
  }

  itemClicked() {
    if(this.props.selectItem) {
      this.props.selectItem(this.props.item.id);
      NavigationService.navigate('Detail', {});
    }
  }
  
  render() {
    console.log(this.props.item.name + ' render');
    return (
      <TouchableOpacity style={{
        width: Dimensions.get('screen').width/2 - 6,
        backgroundColor: '#fff',
        borderRadius: 5,
        margin: 3,
        paddingVertical: 12,
        paddingHorizontal: 12
      }}
      onPress={this.itemClicked.bind(this)}>
        <View style={{
          flexDirection: 'row',
          borderBottomColor: common.colors.logoPrimary,
          borderBottomWidth: 2,
          marginBottom: 5
        }}>
          {this.props.item.avatar?
            <Avatar
              small
              rounded
              source={{uri: this.props.item.avatar}}
              activeOpacity={0.7}
              containerStyle={{
                borderColor: common.colors.logoPrimary, borderWidth: 2,
                marginRight: 5,
                marginBottom: 8
              }}
            /> :
            <Avatar
              small
              rounded
              icon={{name: 'user', type: 'entypo', color: '#fff', style: styles.loginButtonIcon}}
              activeOpacity={0.7}
              containerStyle={{
                borderColor: common.colors.logoPrimary, borderWidth: 2,
                backgroundColor: common.colors.logoSecondary,
                marginRight: 5,
                marginBottom: 8
              }}
            />
          }
          <View>
            {this.props.item.name?
              <Text style={{
                fontWeight: 'bold',
                fontSize: 14
              }}>{this.props.item.name}</Text> : null
            }
            {this.props.item.title?
              <Text style={{
                fontSize: 14
              }}>{this.props.item.title}</Text> : null
            }
          </View>
        </View>
        <View style={{
          alignContent: 'center',
          justifyContent: 'center',
          backgroundColor: common.colors.logoSecondary,
          height: 150 + 50 * utils.randomIntFromInterval(0, 2),
        }}>
          {this.props.item.image?
            <Image source={{uri: this.props.item.image}}/> :
            <Icon name="image" color="#fff" size={50} underlayColor='#fff' />
          }
        </View>
        <View style={{
          marginTop: 10
        }}>
          {this.props.item.description? 
            <Text style={{
              fontStyle: 'italic',
              fontSize: 16
            }}>{this.props.item.description}</Text> : null
          }
          {this.props.item.detail? 
            <Text style={{
              fontStyle: 'italic',
              fontSize: 10,
              color: common.colors.logoSecondary
            }}>{this.props.item.detail}</Text> : null
          }
        </View>
      </TouchableOpacity>
    );
  }
}