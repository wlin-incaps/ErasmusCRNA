import React from 'react';
import { View } from 'react-native';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import auth from './reducers/auth';
import assets from './reducers/assets';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import styles from './styles/styles';
import ConnectAppRoot from './containers/ConnectAppRoot';
import items from './reducers/items';

const rootReducer = combineReducers({auth, assets, items});
const store = createStore(rootReducer, applyMiddleware(thunk));

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <ConnectAppRoot />
        </View>
      </Provider>
    );
  }
}
