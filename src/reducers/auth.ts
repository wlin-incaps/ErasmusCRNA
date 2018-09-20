import { SOCIAL_LOGIN_ERROR, SOCIAL_LOGIN_LOADING, SOCIAL_LOGIN_SUCCESS, STORE_TOKEN, GET_AUTH_LOADING, GET_AUTH_SUCCESS, CLEAR_TOKEN } from "../actions/auth";
import { AnyAction } from "redux";

const initialState = {
    isInitialized: false,
    token: '',
    expires: 0
}

export default function auth(state = initialState, action: AnyAction): any {
    switch(action.type) {
        case SOCIAL_LOGIN_ERROR: return state;
        case SOCIAL_LOGIN_LOADING: return state;
        case SOCIAL_LOGIN_SUCCESS: return state;
        case CLEAR_TOKEN: return { ...state, token: '', expires: 0 }
        case STORE_TOKEN:
            return { ...state, token: action.token, expires: action.expires };
        case GET_AUTH_LOADING: return { ...state,  isInitialized: action.isInitialized };
        case GET_AUTH_SUCCESS: return { ...state, isInitialized: action.isInitialized };
        default: return state;
    }
}