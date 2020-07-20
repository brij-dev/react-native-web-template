'use-strict'

import * as Actions from './actions'

import AppStorage from '../../local_storage/app_storage';
import * as STORAGE_KEYS from '../../local_storage/storage_keys';

let INIT_STATE = {
  cart_deep_data: null
}

const CartDataReducer = (state = INIT_STATE, action) => {

  if(action.type === Actions.UPDATE_CART_DATA){

    state = {
      cart_deep_data: action.payload.cart_deep_data
    }

  }

	return state;
}


export default CartDataReducer;
