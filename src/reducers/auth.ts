import { LOGIN_FB_ERROR, LOGIN_FB_LOADING, LOGIN_FB_SUCCESS, STORE_TOKEN } from "../actions/auth";
import { LocalStorage, LocalKey } from "../store/LocalStorage";

const initialState = {
    token: '',
    expires: 0
}

export default function auth(state = initialState, action: any): any {
    switch(action.type) {
        case LOGIN_FB_ERROR: return state;
        case LOGIN_FB_LOADING: return state;
        case LOGIN_FB_SUCCESS: return state;
        case STORE_TOKEN:
            console.log(action.token);
            LocalStorage.multiSet([[LocalKey.FacebookToken, action.token], [LocalKey.FacebookExpires, action.expires]]);
            return { token: action.token, expires: action.expires };
        default: return state;
    }
}