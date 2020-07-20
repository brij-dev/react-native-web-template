'use-strict'

import * as Actions from './actions'

import AppStorage from '../../local_storage/app_storage';
import * as STORAGE_KEYS from '../../local_storage/storage_keys';

let INIT_STATE = {
  brand_data: null
}

const BrandDataReducer = (state = INIT_STATE, action) => {

  if(action.type === Actions.UPDATE_BRAND_DATA){

    state = {
      brand_data: action.payload.brand_data
    }

  }

	return state;
}


export default BrandDataReducer;
