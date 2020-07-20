// Info: Contains SDK Related to Discount
'use strict';


export const Brand = { // Public functions accessible by other modules


  /********************************************************************
  getBrandID

  @param {reference} instance - SDK Instance object reference

  @param {Set} args - Array List of Parameters
  * @param {String} slug - slug of organisation

  @return -
  *********************************************************************/
  getBrandDataByID: function(instance, success_cb, failed_cb, progress_cb, args){

    // Progress start
    progress_cb(true);

    // SDK function execution starts
    instance.Brand.getBrandDataByID(

      function(err, brand_data){

        progress_cb(false); // Progress Ends

        // If error return error
        if(err){
          return failed_cb(err)
        }

        // If success return data
        return success_cb(brand_data)
      },
      args // params
    );

  },

  /********************************************************************
  Get Organization Brands List

  @param {reference} instance - Request Instance object reference

  @param {Set} args - Array List of Parameters
  * @param {String} auth -  Auth
  * @param {String} org_id -  organization id
  * @param {Number} start -  start

  @return - Thru Callback

  @callback(err, store_data) - Request Callback.
  * @callback {Error} err - Http Error
  * @callback {Set} brands_list - Brand List
  * @callback {Set} page_data - Pagination Data
  *********************************************************************/
  getOrgBrandsList: function(instance, success_cb, failed_cb, progress_cb, args){

    // Progress start
    progress_cb(true);

    // SDK function execution starts
    instance.Brand.getOrgBrandsList(

      function(err, brands_list, pagination_data){

        progress_cb(false); // Progress Ends

        // If error return error
        if(err){
          return failed_cb(err)
        }

        // If success return data
        return success_cb(brands_list, pagination_data)
      },
      args // params
    );

  },


}
