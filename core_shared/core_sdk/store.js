// Info: Contains SDK Related to Store
'use strict';


export const Store = { // Public functions accessible by other modules

  /********************************************************************
  Get stores list (Public)

  @param {reference} instance - SDK Instance object reference

  @param {Function} success_cb - Callback function to be invoked once async execution of this function is finished with success
  @param {Function} failed_cb - Callback function to be invoked once async execution of this function is finished with success
  @param {Function} progress_cb - Callback function to be invoked once async execution of this function progress state changes

  @param {Set} args - Array List of Parameters
  * @param {Set} auth - Auth token for user_data
  * @param {String} brand_id - Brand ID
  * @param {Number} start - pagination start index

  @return - Thru Callback
  *********************************************************************/
  getStoreList: function(instance, success_cb, failed_cb, progress_cb, args){

    // Progress start
    progress_cb(true);

    // SDK function execution starts
    instance.Store.getListCustomer(

      function(err, stores, pagination_data){

        progress_cb(false); // Progress Ends

        // If error return error
        if(err){
          return failed_cb(err)
        }

        // If success return data
        return success_cb(stores, pagination_data);

      },
      args // params
    );

  },

  /********************************************************************
  Get pickup list (Public)

  @param {reference} instance - SDK Instance object reference

  @param {Function} success_cb - Callback function to be invoked once async execution of this function is finished with success
  @param {Function} failed_cb - Callback function to be invoked once async execution of this function is finished with success
  @param {Function} progress_cb - Callback function to be invoked once async execution of this function progress state changes

  @param {Set} args - Array List of Parameters
  * @param {Set} auth - Auth token for user_data
  * @param {String} brand_id - Brand ID
  * @param {Number} start - pagination start index

  @return - Thru Callback
  *********************************************************************/
  getStoresPickupList: function(instance, success_cb, failed_cb, progress_cb, args){

    // Progress start
    progress_cb(true);

    // SDK function execution starts
    instance.Store.getStoresPickupList(

      function(err, stores, pagination_data){

        progress_cb(false); // Progress Ends

        // If error return error
        if(err){
          return failed_cb(err)
        }

        // If success return data
        return success_cb(stores, pagination_data);

      },
      args // params
    );

  },

  /********************************************************************
  Get pickup list (Public)

  @param {reference} instance - SDK Instance object reference

  @param {Function} success_cb - Callback function to be invoked once async execution of this function is finished with success
  @param {Function} failed_cb - Callback function to be invoked once async execution of this function is finished with success
  @param {Function} progress_cb - Callback function to be invoked once async execution of this function progress state changes

  @param {Set} args - Array List of Parameters
  * @param {Set} auth - Auth token for user_data
  * @param {String} brand_id - Brand ID
  * @param {Number} start - pagination start index

  @return - Thru Callback
  *********************************************************************/
  getStoresDeliveryList: function(instance, success_cb, failed_cb, progress_cb, args){

    // Progress start
    progress_cb(true);

    // SDK function execution starts
    instance.Store.getStoresDeliveryList(

      function(err, stores, pagination_data){

        progress_cb(false); // Progress Ends

        // If error return error
        if(err){
          return failed_cb(err)
        }

        // If success return data
        return success_cb(stores, pagination_data);

      },
      args // params
    );

  },

  /********************************************************************
  Store Address String

  @param {reference} instance - SDK Instance object reference

  @param {Set} address_data - Address Data

  @return {String} address - Array List of Parameters
  *********************************************************************/
  storeAddressString: function(instance, address_data){

    if(instance.Utils.isNullOrUndefined(address_data)){
      return null
    }

    var address_string = [];

    if(!instance.Utils.isNullOrUndefined(address_data.line1)){
      address_string.push(address_data.line1)
    }

    if(!instance.Utils.isNullOrUndefined(address_data.line2)){
      address_string.push(address_data.line2)
    }

    if(!instance.Utils.isNullOrUndefined(address_data.locality)){
      address_string.push(address_data.locality)
    }

    if(!instance.Utils.isNullOrUndefined(address_data.locality)){
      address_string.push(address_data.locality)
    }

    if(!instance.Utils.isNullOrUndefined(address_data.extra)){
      address_string.push(address_data.extra)
    }
    
    return address_string.join(', ');
  }

}
