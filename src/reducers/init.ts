import { GET_AUTH_ERROR, GET_AUTH_LOADING, GET_AUTH_SUCCESS } from "../actions/init";

const initialState = {
  isInitialized: false
};

export default function init(state = initialState, action: any): any {
    switch(action.type) {
        case GET_AUTH_ERROR: return { isInitialized: action.isInitialized };
        case GET_AUTH_LOADING: return { isInitialized: action.isInitialized };
        case GET_AUTH_SUCCESS: return { isInitialized: action.isInitialized };
        default: return state;
    }
}