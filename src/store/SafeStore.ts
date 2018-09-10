import { SecureStore } from 'expo';
const storePrefix = 'erasmus_safe_';

export enum SafeKey {
  AccessToken = 'access_token',
  AccessTokenExpires = 'access_token_expires'
}

export const SafeStore = {
  setItem: (key: string, value: string) => {
    return SecureStore.setItemAsync(storePrefix + key, value);
  },
  getItem: (key: string) => {
    return SecureStore.getItemAsync(storePrefix + key);
  },
  deleteIrem: (key: string) => {
    return SecureStore.deleteItemAsync(storePrefix + key);
  },
  multiGet: async (keys: string[]) => {
    let values: Array<string[]> = [];
    for(let key of keys) {
      let value = await SecureStore.getItemAsync(storePrefix + key);
      values.push([ key, value? value: '' ]);
    }
    return values;
  },
  multiSet: async (keyValuePairs: Array<string[]>) => {
    for(const pair of keyValuePairs) {
      await SecureStore.setItemAsync(storePrefix + pair[0], pair[1]);
    }
  },
  multiDelete: async (keys: string[]) => {
    for(const key of keys) {
      await SecureStore.deleteItemAsync(storePrefix + key);
    }
  }
}