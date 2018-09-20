import { AnyAction } from "redux";
import { SET_FONT_LOADED } from "../actions/assets";

const initialState = {
  hasFonts: false
}

export default function assets(state = initialState, action:AnyAction):any {
  switch(action.type) {
    case SET_FONT_LOADED: return { ...state, hasFonts: action.hasFonts }
    default: return state;
  }
}