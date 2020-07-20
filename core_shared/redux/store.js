'use-strict'

import { combineReducers, createStore } from 'redux';

import CustomerDataReducer from './customer/reducer';
import ErrorReducer from './error/reducer';
import CartDataReducer from './cart/reducer';
import BrandDataReducer from './brand/reducer';


const AppReducers = combineReducers({
  CustomerDataReducer, ErrorReducer,
  CartDataReducer, BrandDataReducer
});

const rootReducer = (state, action) => {
	return AppReducers(state,action);
}

let store = createStore(rootReducer);


export default store;
