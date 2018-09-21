import * as React from 'react';
import { Text, View, ScrollView, Dimensions, NativeScrollEvent, NativeSyntheticEvent } from 'react-native';
import { EntityTile, Entity } from './EntityTile';
import { common } from '../styles/styles';

export interface Props {
  num:number;
  pageSize:number;
  scrollBuffer:number;
}

interface State {
  items:Entity[];
  columnOne:Entity[];
  columnTwo:Entity[];
  columnStyle:{ width:number };
  pageIndex:number;
  allowUpdate:boolean;
}

export class StaggerGrid extends React.PureComponent<Props, State> {

  constructor(props: Props) {
    super(props);

    this.state = {
      pageIndex: 1,
      items: [],
      columnOne: [],
      columnTwo: [],
      columnStyle: {
        width: Dimensions.get('screen').width/2
      },
      allowUpdate: true
    }

    for(let index = 0; index < this.props.num; index++) {
      this.state.items.push({
        name: `Name ${index}`,
        title: `Title ${index}`,
        description: `Description ${index}`,
        detail: `Detail ${index}`
      });
    }

    for(let index = 0; index < this.props.pageSize && index < this.state.items.length; index++) {
      if(index % 2) {
        this.state.columnTwo.push(this.state.items[index]);
      }
      else {
        this.state.columnOne.push(this.state.items[index]);
      }
    }
  }

  updateColumns() {
    console.log('update');
    const pageIndex = this.state.pageIndex;
    const slice = this.state.items.length > this.props.pageSize * (pageIndex + 1)?
      this.state.items.slice(this.props.pageSize * pageIndex, this.props.pageSize * (pageIndex + 1)):
      this.state.items.slice(this.props.pageSize * pageIndex);
    const columnOne = this.state.columnOne.slice();
    const columnTwo = this.state.columnTwo.slice();
    slice.forEach((item, index) => {
      if(index % 2) {
        columnTwo.push(item);
      }
      else {
        columnOne.push(item);
      }
    });

    if(slice.length) {
      this.setState({
        pageIndex: pageIndex + 1,
        columnOne: columnOne,
        columnTwo: columnTwo
      });

      setTimeout(() => {
        this.setState({
          allowUpdate: true
        });
      }, 1000);
    }
  }

  isCloseToBottom = (event?: NativeSyntheticEvent<NativeScrollEvent>) => {
    if(event && this.state.allowUpdate) {
      const isClose = event.nativeEvent.layoutMeasurement.height + event.nativeEvent.contentOffset.y >=
        event.nativeEvent.contentSize.height - this.props.scrollBuffer;
      if(isClose) {
        this.setState({
          allowUpdate: false
        });
        this.updateColumns();
      }
    }
  };

  _mapItem(item:Entity, index:number) {
    return (
      <EntityTile item={item} key={index}/>
    );
  }

  render() {
    console.log('stagger render');
    return (
      <ScrollView onScroll={this.isCloseToBottom} scrollEventThrottle={16}>
        <View style={{
          flexDirection: 'row',
          backgroundColor: common.colors.logoSecondary
        }}>
          <View style={this.state.columnStyle}>
            {this.state.columnOne.map(this._mapItem)}
          </View>
          <View style={this.state.columnStyle}>
            {this.state.columnTwo.map(this._mapItem)}
          </View>
        </View>
      </ScrollView>
    );
  }
}