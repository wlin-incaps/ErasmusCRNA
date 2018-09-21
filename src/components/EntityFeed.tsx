import * as React from 'react';
import { FlatList, View, Dimensions, ListRenderItemInfo } from 'react-native';
import { EntityTile } from './EntityTile';

export interface Props {

}

interface State {
  entities:any[];
}

export class EntityFeed extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      entities: [
        {
          title: '1'
        },
        {
          title: '2'
        },
        {
          title: '3'
        },
        {
          title: '1'
        },
        {
          title: '2'
        },
        {
          title: '3'
        },
        {
          title: '1'
        },
        {
          title: '2'
        },
        {
          title: '3'
        },
        {
          title: '1'
        },
        {
          title: '2'
        },
        {
          title: '3'
        }
      ]
    };
  }

  _renderItem(info: ListRenderItemInfo<any>) {
    return (
        <EntityTile item={info.item} />
    );
  }

  _keyExtractor(item:any, index:number) {
    return `${index}`;
  }

  render() {
    return (
      <FlatList data={this.state.entities}
        renderItem={this._renderItem}
        keyExtractor={this._keyExtractor}
      />
    );
  }
}