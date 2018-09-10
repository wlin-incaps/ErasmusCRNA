import { LOGIN_FB_ERROR, LOGIN_FB_LOADING, LOGIN_FB_SUCCESS, STORE_TOKEN, GET_AUTH_LOADING, GET_AUTH_SUCCESS, LOGOUT_FB } from "../actions/auth";

const initialState = {
    isInitialized: false,
    token: '',
    expires: 0
}

export default function auth(state = initialState, action: any): any {
    switch(action.type) {
        case LOGIN_FB_ERROR: return state;
        case LOGIN_FB_LOADING: return state;
        case LOGIN_FB_SUCCESS: return state;
        case LOGOUT_FB: return { ...state, token: '', expires: 0 }
        case STORE_TOKEN:
            return { ...state, token: action.token, expires: action.expires };
        case GET_AUTH_LOADING: return { ...state,  isInitialized: action.isInitialized };
        case GET_AUTH_SUCCESS: return { ...state, isInitialized: action.isInitialized };
        default: return state;
    }
}