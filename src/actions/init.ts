import { Dispatch, AnyAction } from "redux";
import { AsyncStorage } from "react-native";
import { LocalStorage, LocalKey } from "../store/LocalStorage";
import { storeToken } from "./auth";

export const GET_AUTH_ERROR = 'GET_AUTH_ERROR';
export const GET_AUTH_LOADING = 'GET_AUTH_LOADING';
export const GET_AUTH_SUCCESS = 'GET_AUTH_SUCCESS';

export function getAuthError(): AnyAction {
    return {
        type: GET_AUTH_ERROR,
        isInitialized: false
    }
}

export function getAuthLoading(): AnyAction {
    return {
        type: GET_AUTH_LOADING,
        isInitialized: false
    }
}

export function getAuthSuccess(): AnyAction {
  return {
      type: GET_AUTH_SUCCESS,
      isInitialized: true
  }
}

export function getAuthentication() {
  return (dispatch: Dispatch) => {
    dispatch(getAuthLoading());

    LocalStorage.multiGet([ LocalKey.FacebookToken, LocalKey.FacebookExpires ])
      .then((values) => {
        dispatch(getAuthSuccess());
        dispatch(storeToken(values[0][1], parseFloat(values[1][1])));
      })
      .catch((error) => {
        dispatch(getAuthError());
      });
  }
}