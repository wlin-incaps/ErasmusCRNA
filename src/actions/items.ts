import { AnyAction, Dispatch } from "redux";

export const GET_ITEMS_LOADING = 'GET_ITEMS_LOADING';
export const GET_ITEMS_SUCCESS = 'GET_ITEMS_SUCCESS';
export const GET_ITEMS_ERROR = 'GET_ITEMS_ERROR';

export function getItemsLoading(): AnyAction {
  return {
    type: GET_ITEMS_LOADING,
    isLoading: true
  }
}

export function getItemsSuccess(items: any[]): AnyAction {
  return {
    type: GET_ITEMS_SUCCESS,
    items: items,
    isLoading: false
  }
}

export function getItemsError(): AnyAction {
  return {
    type: GET_ITEMS_ERROR,
    isLoading: false
  }
}

export function getItems() {
  return async (dispatch: Dispatch) => {
    dispatch(getItemsLoading());

    try{
      let items:any[] = [];

      for(let index = 0; index < 100; index++) {
        items.push({
          name: `Name ${index}`,
          title: `Title ${index}`,
          description: `Description ${index}`,
          detail: `Detail ${index}`
        });
      }

      dispatch(getItemsSuccess(items));
    }
    catch(err) {
      console.log('Error occurred while getting items');
      console.log(err);

      dispatch(getItemsError());
    }
  }
}

export const SELECT_ITEM = 'SELECT_ITEM';

export function selectItem(itemId: number): AnyAction {
  return {
    type: SELECT_ITEM,
    itemId: itemId
  }
}