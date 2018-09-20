import * as React from 'react';
import { View, Clipboard, Modal, Text } from 'react-native';
import { Icon, Card, Button } from 'react-native-elements';
import styles, { common } from '../styles/styles';
import utils from '../common/utils';

export interface Props {
}

interface MicroContent {
  entity: string,
  title: string,
  description: string,
  imageData: string,
  url: string
}

interface State {
  modalVisible: boolean,
  createContent: MicroContent
}

export class HeaderAddIcon extends React.Component<Props, State> {
  constructor (props: Props) {
    super(props);
    this.state = {
      modalVisible: false,
      createContent: {
        entity: '', title: '', description: '', imageData: '', url: ''
      }
    };
  }

  

  async openContentModal() {
    try{
      const url = await Clipboard.getString();
      if(url) {
        const metaMap = await utils.getMicrodataFromUrl(url);
        if(metaMap.og) {
          const response:any = await fetch(metaMap.og.image);
          const blob = await response.blob();
          const dataURL = await utils.blobToDataURL(blob);
          this.setState({
            modalVisible: true,
            createContent: {
              ...this.state.createContent,
              entity: metaMap.og.site_name,
              title: metaMap.og.title,
              description: metaMap.og.description,
              imageData: dataURL,
              url: url
            }
          });
        }
        else if(metaMap.twitter) {
          const response:any = await fetch(metaMap.twitter['image:src']);
          const blob = await response.blob();
          const dataURL = await utils.blobToDataURL(blob);
          this.setState({
            modalVisible: true,
            createContent: {
              ...this.state.createContent,
              entity: metaMap.twitter.site,
              title: metaMap.twitter.title,
              description: metaMap.twitter.description,
              imageData: dataURL,
              url: url
            }
          });
        }
        else {
          this.setState({
            modalVisible: true
          });
        }
      }
    }
    catch(err) {
      console.log('Error getting metadata from URL');
      console.log(err);
    }
  }

  closeContentModal() {
    this.setState({
      modalVisible: false
    });
  }

  render() {
    return (
      <View>
        <Icon name="add" color="#fff" underlayColor={common.colors.logoBack} onPress={() => { this.openContentModal(); }} />
        <Modal
          animationType="fade"
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => { console.log('closed modal'); }}
        >
          <View style={styles.modalBackdrop}>
            <View style={styles.modal}>
              <Card
                title={this.state.createContent.entity}
                image={{uri: this.state.createContent.imageData}}
              >
                <Text style={{marginBottom: 10}}>
                  {this.state.createContent.description? this.state.createContent.description: this.state.createContent.title}
                </Text>
                <Button
                  backgroundColor='#555'
                  raised
                  title='Add'
                  onPress={() => { this.closeContentModal() }}/>
              </Card>
            </View>
          </View>
        </Modal>
        {this.props.children}
      </View>
    );
  }
};