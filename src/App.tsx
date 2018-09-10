import React from 'react';
import { StyleSheet, View } from 'react-native';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import auth from './reducers/auth';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import ConnectMain from './containers/ConnectMain';

const rootReducer = combineReducers({auth});
const store = createStore(rootReducer, applyMiddleware(thunk));

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <ConnectMain />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
