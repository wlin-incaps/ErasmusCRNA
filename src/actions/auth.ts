import { AnyAction, Dispatch } from "redux";
import * as Expo from 'expo';
import { SafeKey, SafeStore } from "../store/SafeStore";

/**
 * Initial authentication state
 */
export const GET_AUTH_LOADING = 'GET_AUTH_LOADING';
export const GET_AUTH_SUCCESS = 'GET_AUTH_SUCCESS';
export const STORE_TOKEN = 'STORE_TOKEN';

export function storeToken(token: string, expires: number) {
    return {
        type: STORE_TOKEN,
        token: token,
        expires: expires
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

    SafeStore.multiGet([ SafeKey.FacebookToken, SafeKey.FacebookExpires ])
      .then((values) => {
        console.log(values);
        dispatch(storeToken(values[0][1], parseFloat(values[1][1])));

        setTimeout(() => dispatch(getAuthSuccess()), 3000);
      })
      .catch((error) => {
        console.log('Error during initialization');
        console.log(error);
      });
  }
}

/**
 * Facebook login
 */
export const LOGIN_FB_ERROR = 'LOGIN_FB_ERROR';
export const LOGIN_FB_LOADING = 'LOGIN_FB_LOADING';
export const LOGIN_FB_SUCCESS = 'LOGIN_FB_SUCCESS';
export const LOGOUT_FB = 'LOGOUT_FB';

export function loginFacebookError(): AnyAction {
    return {
        type: LOGIN_FB_ERROR
    }
}

export function loginFacebookLoading(): AnyAction {
    return {
        type: LOGIN_FB_LOADING
    }
}

export function loginFacebookSuccess(): AnyAction {
    return {
        type: LOGIN_FB_SUCCESS
    }
}

export function loginFacebook() {
    return async (dispatch: Dispatch) => {
        dispatch(loginFacebookLoading());

        try {
            const{ type, token, expires } = await Expo.Facebook.logInWithReadPermissionsAsync('268055910349027', {
                permissions: ['public_profile', 'email']
            });

            if(type === 'success' && token && expires) {
                SafeStore.multiSet([[SafeKey.FacebookToken, token], [SafeKey.FacebookExpires, '' + expires]]);
                dispatch(storeToken(token, expires));
            }

            const res = await fetch(`https://graph.facebook.com/me?fields=first_name,last_name,middle_name,name,email&access_token=${token}`);
            let response = res.json();
            console.log(JSON.stringify(response));

            dispatch(loginFacebookSuccess());
        }
        catch(error) {
            console.log('Facebook login error');
            console.log(error);
            dispatch(loginFacebookError());
        }
    }
}

export function logoutFacebook() {
    return {
        type: LOGOUT_FB
    }
}