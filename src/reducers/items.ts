import { AnyAction } from "redux";
import { GET_ITEMS_LOADING, GET_ITEMS_SUCCESS, GET_ITEMS_ERROR, SELECT_ITEM } from "../actions/items";

const initialState = {
    isLoading: false,
    items: [],
    itemId: 0
}

export default function items(state = initialState, action: AnyAction): any {
    switch(action.type) {
        case GET_ITEMS_LOADING: return { ...state, isLoading: action.isLoading };
        case GET_ITEMS_SUCCESS:
          let items = state.items.slice();
          const newItems = action.items.slice();
          newItems.forEach((item:any, index:number) => {
            item.id = items.length + index
          });
          return { ...state, isLoading: action.isLoading, items: items.concat(newItems) };
        case GET_ITEMS_ERROR: return { ...state, isLoading: action.isLoading };
        case SELECT_ITEM: return { ...state, itemId: action.itemId };
        default: return state;
    }
}