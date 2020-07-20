'use-strict'

import * as Actions from './actions'

import AppStorage from '../../local_storage/app_storage';
import * as STORAGE_KEYS from '../../local_storage/storage_keys';

let INIT_STATE = {
  customer_data: null,
  auth: null
}

const CustomerDataReducer = (state = INIT_STATE, action) => {

  if(action.type === Actions.UPDATE_CUSTOMER_DATA){

    state = {
      customer_data: action.payload.customer_data,
      auth: action.payload.auth
    }

    AppStorage.saveDataInLocalStorage(
      STORAGE_KEYS.AUTH_KEY,
      action.payload.auth,
      function(err){

        if(err){
          return console.log('Auth key not saved in app storage');
        }

        return console.log('Auth key saved in app storage');

      }
    )

  }

  if(action.type === Actions.FLUSH_CUSTOMER_DATA){

    state = {
      customer_data: null,
      auth: null
    }

    AppStorage.clearDataFromLocalStorage(
      STORAGE_KEYS.AUTH_KEY,
      action.payload.auth,
      function(err){

        if(err){
          return console.log('Auth key can not be deleted successfully');
        }

        return console.log('Auth key deleted successfully');

      }
    )

  }

  if(action.type === Actions.LOAD_AUTH_KEY){

    AppStorage.getDataFromLocalStorage(
      STORAGE_KEYS.AUTH_KEY,
      function(err, data){

        // If error execute callback with
        if(err){
          return action.payload.cb(true, null) // true in case of error
        }

        state['auth'] = data;
        action.payload.cb(false, data); // false in case of data found in storage

      }

    )

  }


	return state;
}


export default CustomerDataReducer;
