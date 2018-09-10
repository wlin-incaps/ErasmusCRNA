import { AsyncStorage } from "react-native";

const storePrefix = '@Erasmus:';

export enum LocalKey {
  FacebookToken = 'facebook_token',
  FacebookExpires = 'facebook_expires'
}

export const LocalStorage = {
  getItem: (key: string) => {
    return AsyncStorage.getItem(storePrefix + key);
  },
  setItem: (key: string, value: string) => {
    value = value? '' + value : '';
    return AsyncStorage.setItem(storePrefix + key, value);
  },
  multiGet: (keys: string[]) => {
    let clone = keys.slice();
    clone.forEach((item) => {
      item = storePrefix + item;
    });
    return AsyncStorage.multiGet(clone);
  },
  multiSet: (keyValuePairs: Array<string[]>) => {
    let clone = keyValuePairs.slice();
    clone.forEach((item) => {
      item[0] = storePrefix + item[0];
      item[1] = item[1]? '' + item[1] : '';
    });
    return AsyncStorage.multiSet(clone);
  },
  getAll: async () => {
    try{
      let keys = await AsyncStorage.getAllKeys();
      let values = await AsyncStorage.multiGet(keys);
      return values;
    }
    catch(error) {

    }
  },
  clear: async () => {
    try{
      let keys = await AsyncStorage.getAllKeys();
      keys = keys.filter((item) => {
        item.indexOf(storePrefix) === 0;
      });
      return AsyncStorage.multiRemove(keys);
    }
    catch(error) {
      
    }
  }
}