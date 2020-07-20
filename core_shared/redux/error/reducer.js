'use-strict'

import * as Actions from './actions'
import ERRORS from './errors.json'

// init with default states
let INIT_STATE = {
  local_errors: [],
  global_errors: [],
  unhandled_errors: []
}

// Check error already exist in error list
const checkErrorExistInErrorList = function(error_list, error_code){

  // If error
  if(error_list.length === 0){
    return false
  }

  return error_list.every(
    function(error){
      if(error.code === error_code){
        return true
      }else{
        return false
      }
    }
  )

}


// Check error already exist in error constraints
const checkErrorExistInErrorConstraints = function(error_constraints, error_code){

  var has_error = false;
console.log('screen 01', Object.values(error_constraints))
console.log('screen 02', error_code)
  Object.values(error_constraints).map(
    function(module){
      console.log(module)
      module['error_codes'].map(
       function(module_error_code){
         console.log('screen 1', module_error_code)
         console.log('screen 2', error_code)
          if(module_error_code === error_code){
            has_error = true;
            return;
          }
       }
     );
    }
  );

  return has_error;

}



const ErrorReducer = (state = INIT_STATE, action) => {

  // On add error action
  if(action.type === Actions.ADD_HANDLED_ERRORS){

    // Treverse array of errors
    action.payload.errors.map(
      function(error){

        if(
          ERRORS.GLOBAL_ERRORS.includes(error.code) && // Check error code belongs to global errors
          !checkErrorExistInErrorList(state.global_errors, error.code) // Check if error already exist in global errors
        ){

          // Add error in global error list
          state.global_errors.push(error);

        }else if(
          checkErrorExistInErrorConstraints(action.payload.constraints, error.code) && // Check error code belongs to local errors
          !checkErrorExistInErrorList(state.local_errors, error.code) // Check if error already exist in local errors
        ){

          // Add error in local error list
          state.local_errors.push(error);

        }else if(
          !checkErrorExistInErrorList(state.unhandled_errors, error.code) // Check if error already exist in unhandled errors
        ){

          // Add error in unhandled error list
          state.unhandled_errors.push(error);

        }

      }
    );

    state = {
      global_errors: state.global_errors,
      local_errors: state.local_errors,
      unhandled_errors: []
    };


  }

  // On add error action
  if(action.type === Actions.ADD_UNHANDLED_ERRORS){

    // Treverse array of errors
    action.payload.errors.map(
      function(error){
        if(!checkErrorExist(state.unhandled_errors, error.code)){
          // If error does not belongs to global errors add in local error state
          state.unhandled_errors.push(error);

          state.local_errors.map(
            function(err, i){

              if(err.code == error.code){
                state.local_errors.splice(i, 1);
              }

            }
          )

        }
      }
    );

    state = {
      global_errors: state.global_errors,
      local_errors: state.local_errors,
      unhandled_errors: state.unhandled_errors
    }
    console.log('ADD_UNHANDLED_ERRORS', state);
  }

  // On remove error action
  if(action.type === Actions.CLEAR_LOCAL_ERRORS){

    state = {
      global_errors: [],
      local_errors: [],
      unhandled_errors: []
    }

  }

	return state;
}


export default ErrorReducer;
