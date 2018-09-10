import { AnyAction, Dispatch } from "redux";

export const LOGIN_FB_ERROR = 'LOGIN_FB_ERROR';
export const LOGIN_FB_LOADING = 'LOGIN_FB_LOADING';
export const LOGIN_FB_SUCCESS = 'LOGIN_FB_SUCCESS';

export const STORE_TOKEN = 'STORE_TOKEN';

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

export function loginFacebook(token: string) {
    return (dispatch: Dispatch) => {
        dispatch(loginFacebookLoading());

        fetch(`https://graph.facebook.com/me?fields=first_name,last_name,middle_name,name,email&access_token=${token}`)
            .then((response) => response.json())
            .then((response) => {
                console.log(JSON.stringify(response));
                dispatch(loginFacebookSuccess());
            })
            .catch((error) => {
                dispatch(loginFacebookError());
            });
    }
}

export function storeToken(token: string, expires: number) {
    return {
        type: STORE_TOKEN,
        token: token,
        expires: expires
    }
}