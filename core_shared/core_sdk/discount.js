// Info: Contains SDK Related to Discount
'use strict';


export const Discount = { // Public functions accessible by other modules

  /********************************************************************
  Get discount list

  @param {reference} instance - SDK Instance object reference

  @param {Function} success_cb - Callback function to be invoked once async execution of this function is finished with success
  @param {Function} failed_cb - Callback function to be invoked once async execution of this function is finished with success
  @param {Function} progress_cb - Callback function to be invoked once async execution of this function progress state changes

  @param {Set} args - Array List of Parameters
  * @param {String} auth - Auth token for user_data
  * @param {String} brand_id - Brand ID
  * @param {String} store_id - Brand ID
  * @param {String} start - Pagination start

  @return - Thru Callback
  *********************************************************************/
  getDiscountList: function(instance, success_cb, failed_cb, progress_cb, args){

    // Progress start
    progress_cb(true);

    // SDK function execution starts
    instance.Discount.getStoreDiscounts(

      function(err, discounts_data, pagination_data){

        progress_cb(false); // Progress Ends

        // If error return error
        if(err){
          return failed_cb(err)
        }

        // If success return data
        return success_cb(discounts_data, pagination_data)
      },
      args // params
    );

  }

}
