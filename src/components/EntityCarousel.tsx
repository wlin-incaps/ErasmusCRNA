import * as React from 'react';
import { View, Text, Dimensions } from 'react-native';
import styles from '../styles/styles';
import Carousel from 'react-native-snap-carousel';
import { EntityCard } from './EntityCard';

export interface Props {
  title:string;
}

interface RenderItemParam {
  item: any,
  index: number
}

interface State {
  entities: any[];
}

export class EntityCarousel extends React.Component<Props, State>{
  private _carousel:any;

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
        }
      ]
    };
  }

  _renderItem(renderItem:RenderItemParam) {
    return (
        <EntityCard entity={renderItem.item} />
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.carouselTitle}>{this.props.title}</Text>
        <Carousel ref={(c:any) => { this._carousel = c; }}
          data={this.state.entities}
          renderItem={this._renderItem}
          sliderWidth={Dimensions.get('window').width}
          itemWidth={300}
          itemHeight={300}
        />
      </View>
    );
  }
}