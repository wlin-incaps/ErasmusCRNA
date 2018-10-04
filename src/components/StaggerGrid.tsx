import * as React from 'react';
import { Text, View, ScrollView, Dimensions, NativeScrollEvent, NativeSyntheticEvent, LayoutChangeEvent } from 'react-native';
import { EntityTile, Entity } from './EntityTile';
import { common } from '../styles/styles';
import ConnectEntityTile from '../containers/ConnectEntityTile';

export interface Props {
  pageSize:number;
  scrollBuffer:number;
  items?: any[];
  getItems?: () => void;
}

interface State {
  columnOne:Entity[];
  columnTwo:Entity[];
  pageIndex:number;
  allowUpdate:boolean;
}

export class StaggerGrid extends React.PureComponent<Props, State> {
  private columnWidth:number = Dimensions.get('screen').width/2;
  private columnHeights:number[] = [0, 0];

  constructor(props: Props) {
    super(props);

    this.state = {
      pageIndex: 0,
      columnOne: [],
      columnTwo: [],
      allowUpdate: true
    }
    console.log(this.columnHeights);
  }

  componentWillReceiveProps(nextProps:Props) {
    // initial update after receiving items
    if(nextProps.items && nextProps.items.length
       && this.state.pageIndex === 0)
    {
      this.updateColumns(nextProps.items);
    }
  }
  
  componentDidMount() {
    // get initial set of items if empty
    if((!this.props.items || !this.props.items.length) && this.props.getItems) {
      this.props.getItems();
    }
    // otherwise, populate the page
    else {
      this.updateColumns();
    }
  }

  updateColumns(propItems?: Entity[]) {
    const pageIndex = this.state.pageIndex;
    const items = propItems? propItems : this.props.items? this.props.items : [];
    // if on or before the last page, update the page from props
    if(items.length >= this.props.pageSize * (pageIndex + 1)) {
      console.log('update');
      const slice = items.length > this.props.pageSize * (pageIndex + 1)?
        items.slice(this.props.pageSize * pageIndex, this.props.pageSize * (pageIndex + 1)):
        items.slice(this.props.pageSize * pageIndex);
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

    // if we are on or past the last page, get items before we get to the end
    if(items.length <= this.props.pageSize * (pageIndex + 1) && this.props.getItems) {
      console.log('get items');
      this.props.getItems();
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
      <ConnectEntityTile item={item} key={index}/>
    );
  }

  render() {
    console.log('stagger render');
    return (
      <ScrollView onScroll={this.isCloseToBottom} scrollEventThrottle={16}>
        <View style={{
          flexDirection: 'row',
          alignItems: 'flex-start',
        }}>
          <View style={{width: this.columnWidth}}>
            {this.state.columnOne.map(this._mapItem)}
          </View>
          <View style={{width: this.columnWidth}}>
            {this.state.columnTwo.map(this._mapItem)}
          </View>
        </View>
      </ScrollView>
    );
  }
}