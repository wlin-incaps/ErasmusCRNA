import * as React from 'react';
import { FlatList, View, Dimensions, ListRenderItemInfo } from 'react-native';
import { EntityTile } from './EntityTile';
import { StaggerGrid } from './StaggerGrid';

export interface Props {

}

export class EntityFeed extends React.PureComponent<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <StaggerGrid pageSize={20} scrollBuffer={Dimensions.get('screen').height * 2} />
    );
  }
}