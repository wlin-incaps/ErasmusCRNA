import * as React from 'react';
import { Button, ScrollView, View, Text } from 'react-native';
import styles from '../styles/styles';

export interface Props {
  title: string;
}

interface State {
  grid: any[][];
}

export class EntityGrid extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);

    const entities:any[] = [
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
        title: '4'
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
        title: '4'
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
    ];

    let newGrid: any[][] = [];
    let rowIndex = 0;
    entities.forEach((item, index) => {
      const columnIndex = index % 4;
      rowIndex = Math.floor(index / 4);
      if(columnIndex === 0) {
        newGrid.push([]);
      }

      newGrid[rowIndex].push(item);
    });

    const leftover = entities.length % 4;
    if(leftover) {
      for(let index = 0; index < 4 - leftover; index++) {
        newGrid[rowIndex].push({});
      }
    }

    this.state = {
      grid: newGrid
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.gridTitle}>{this.props.title}</Text>
        <ScrollView style={styles.container}>
          {this.state.grid.map((row, rowIndex) => {
            return (
              <View key={`${rowIndex}`} style={styles.entityGridRow}>
                {row.map((cell, cellIndex) => {
                  return (
                    <View key={`${rowIndex}-${cellIndex}`} style={styles.entityGridCell}>
                      <Text>{cell.title? cell.title : 'filler'}</Text>
                    </View>
                  );
                })}
              </View>
            );
          })}
          
        </ScrollView>
      </View>
    );
  }
}