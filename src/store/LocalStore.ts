import { AsyncStorage } from "react-native";

const storePrefix = 'erasmus_';

export enum LocalKey {
}

export const LocalStore = {
  getItem: (key: string) => {
    return AsyncStorage.getItem(storePrefix + key);
  },
  setItem: (key: string, value: string) => {
    value = value? value : '';
    return AsyncStorage.setItem(storePrefix + key, value);
  },
  multiGet: (keys: string[]) => {
    let clone = keys.slice();
    clone.forEach((item) => {
      item = storePrefix + item;
    });
    return AsyncStorage.multiGet(clone);
  },
  multiSet: async (keyValuePairs: Array<string[]>) => {
    let clone = keyValuePairs.slice();
    for(const pair of clone) {
      pair[0] = storePrefix + pair[0];
    }
    return AsyncStorage.multiSet(clone);
  },
  getAll: async () => {
    try{
      let keys = await AsyncStorage.getAllKeys();
      keys = keys.filter((item) => {
        item.indexOf(storePrefix) === 0;
      });
      let values = await AsyncStorage.multiGet(keys);
      return values;
    }
    catch(error) {
      throw error;
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
      throw error;
    }
  }
}