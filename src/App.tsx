import React from 'react';
import { View } from 'react-native';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import auth from './reducers/auth';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import AppRoot from './navigation/AppRoot';
import styles from './styles/styles';

const rootReducer = combineReducers({auth});
const store = createStore(rootReducer, applyMiddleware(thunk));

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <AppRoot />
        </View>
      </Provider>
    );
  }
}
