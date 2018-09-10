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

export function getAuthStoreLoading(): AnyAction {
    return {
        type: GET_AUTH_LOADING,
        isInitialized: false
    }
}

export function getAuthStoreSuccess(): AnyAction {
  return {
      type: GET_AUTH_SUCCESS,
      isInitialized: true
  }
}

export function getAuthStore() {
  return (dispatch: Dispatch) => {
    dispatch(getAuthStoreLoading());

    SafeStore.multiGet([ SafeKey.AccessToken, SafeKey.AccessTokenExpires ])
      .then((values) => {
        dispatch(storeToken(values[0][1], parseFloat(values[1][1])));

        setTimeout(() => dispatch(getAuthStoreSuccess()), 3000);
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
export const SOCIAL_LOGIN_ERROR = 'SOCIAL_LOGIN_ERROR';
export const SOCIAL_LOGIN_LOADING = 'SOCIAL_LOGIN_LOADING';
export const SOCIAL_LOGIN_SUCCESS = 'SOCIAL_LOGIN_SUCCESS';
export const CLEAR_TOKEN = 'SOCIAL_LOGOUT';
export enum LoginType {
    Facebook = 'facebook',
    Google = 'google'
}

export function socialLoginError(): AnyAction {
    return {
        type: SOCIAL_LOGIN_ERROR
    }
}

export function socialLoginLoading(): AnyAction {
    return {
        type: SOCIAL_LOGIN_LOADING
    }
}

export function socialLoginSuccess(): AnyAction {
    return {
        type: SOCIAL_LOGIN_SUCCESS
    }
}

export function socialLogin(loginType: LoginType) {
    return async (dispatch: Dispatch) => {
        dispatch(socialLoginLoading());

        try {
            let outcome = '', accessToken = '', tokenExpires = 0;
            if(loginType === LoginType.Facebook) {
                const { type, token, expires } = await Expo.Facebook.logInWithReadPermissionsAsync('268055910349027', {
                    permissions: ['public_profile', 'email']
                });

                outcome = type;
                accessToken = token? token : '';
                tokenExpires = expires? expires : 0;
            }
            else if(loginType === LoginType.Google) {
                const iosClientId = '1065816006389-gut8n5m9g1uagi1t521votb3anelibmc.apps.googleusercontent.com';
                const androidClientId = '1065816006389-82ftic1p5kje35be978gifc0c44qdsgn.apps.googleusercontent.com';
                const result = await Expo.Google.logInAsync({
                    iosClientId: iosClientId,
                    androidClientId: androidClientId,
                    scopes: ['profile', 'email'],
                });

                outcome = result.type;
                accessToken = result.type === 'success'? result.accessToken : '';
                console.log('result');
                console.log(result);
            }

            if(outcome === 'success') {
                SafeStore.multiSet([[SafeKey.AccessToken, accessToken], [SafeKey.AccessTokenExpires, '' + tokenExpires]]);
                dispatch(storeToken(accessToken, tokenExpires));

                //use to get info from API
                let res:(Response | undefined);
                if(loginType === LoginType.Facebook) {
                    res = await fetch(`https://graph.facebook.com/me?fields=first_name,last_name,middle_name,name,email&access_token=${accessToken}`);
                }
                else if(loginType === LoginType.Google) {
                    res = await fetch('https://www.googleapis.com/userinfo/v2/me', {
                        headers: { Authorization: `Bearer ${accessToken}`},
                    });
                }

                if(res) {
                    const response = await res.json();
                    console.log(JSON.stringify(response));
                    dispatch(socialLoginSuccess());
                }
            }
            else {

            }
        }
        catch(error) {
            console.log('Facebook login error');
            console.log(error);
            dispatch(socialLoginError());
        }
    }
}

export function clearToken() {
    return {
        type: CLEAR_TOKEN
    }
}

export function logout() {
    return async (dispatch: Dispatch) => {
        SafeStore.multiDelete(['fb_token', 'fb_expires']);
        SafeStore.multiDelete([SafeKey.AccessToken, SafeKey.AccessTokenExpires]);
        dispatch(clearToken());
    }
}